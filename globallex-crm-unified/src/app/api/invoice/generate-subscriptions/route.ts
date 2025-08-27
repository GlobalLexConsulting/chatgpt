import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

function firstDay(d = new Date()){ return new Date(d.getFullYear(), d.getMonth(), 1).toISOString().slice(0,10) }
function lastDay(d = new Date()){ return new Date(d.getFullYear(), d.getMonth()+1, 0).toISOString().slice(0,10) }

export async function POST(req: NextRequest){
  const today = new Date().toISOString().slice(0,10)
  const { data: subs, error } = await supabase.from('subscriptions')
    .select('*')
    .lte('next_invoice_date', today)
    .eq('status','active')
  if(error) return new Response(error.message, { status: 500 })

  const created:any[] = []
  for(const s of subs||[]){
    const inv = await supabase.from('invoices').insert([{
      org_id: s.org_id, client_id: s.client_id, issue_date: firstDay(), due_date: lastDay(),
      base: Number(s.price) * Number(s.quantity || 1), vat_rate: 21, irpf_rate: 0, status:'pending'
    }]).select().single()
    if(inv.error) continue
    const invoice = inv.data

    const unit_price = Number(s.price)
    const qty = Number(s.quantity || 1)
    await supabase.from('invoice_items').insert([{
      invoice_id: invoice.id,
      service_code: s.service_code,
      description: `Suscripción ${s.service_code} (${qty} x ${unit_price.toFixed(2)} EUR)`,
      quantity: qty,
      unit_price,
      vat_rate: 21,
      irpf_rate: 0,
      line_total: unit_price * qty
    }])

    const d = new Date(s.next_invoice_date || today)
    d.setMonth(d.getMonth() + (s.period_months || 1))
    const next = d.toISOString().slice(0,10)
    await supabase.from('subscriptions').update({ next_invoice_date: next }).eq('id', s.id)

    created.push({ invoice_id: invoice.id })
  }

  return new Response(JSON.stringify({ created: created.length }), { status: 200 })
}
