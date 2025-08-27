import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(req: NextRequest){
  const { text='' } = await req.json()

  if(/nuevo lead/i.test(text)){
    const name = text.replace(/.*nuevo lead[: ]*/i,'').trim() || 'Lead sin nombre'
    await supabase.from('leads').insert([{ name, stage:'new' }])
    return Response.json({ reply: `He creado el lead: ${name}` })
  }

  if(/emitir facturas( de)? suscripciones/i.test(text)){
    const res = await fetch(new URL('/api/invoice/generate-subscriptions', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'), { method: 'POST', body: JSON.stringify({}) })
    const j = await res.json().catch(()=>({ created: 0 }))
    return Response.json({ reply: `Facturas de suscripciones creadas: ${j.created}` })
  }

  const mSub = text.match(/suscrip(ci[oó]n|tion) (.+?) (FREELANCER_5|FREELANCER_HIGH|SL_NO_LAB|SL_1_EMP|EMPLOYEE_ADD)/i)
  if(mSub){
    const clientName = mSub[2].trim()
    const code = mSub[3].toUpperCase()
    const { data: cl } = await supabase.from('clients').select('id').ilike('name', clientName).limit(1).single()
    const { data: svc } = await supabase.from('services').select('*').eq('code', code).limit(1).single()
    if(cl && svc){
      await supabase.from('subscriptions').insert([{ client_id: cl.id, service_code: code, price: svc.retail_price_min, quantity: 1 }])
      return Response.json({ reply: `Suscripción ${code} creada para ${clientName}` })
    }
    return Response.json({ reply: `No encontré cliente o servicio` })
  }

  if(/presupuesto (llc|sl|cb)/i.test(text)){
    const type = /llc/i.test(text) ? 'LLC_US' : (/sl/i.test(text) ? 'SL_ES' : 'CB_ES')
    const r = await fetch(new URL('/api/quote', process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'), { method: 'POST', body: JSON.stringify({ type }) })
    const j = await r.json()
    return Response.json({ reply: `Total orientativo: ${j.total} EUR` })
  }

  return Response.json({ reply: 'Opciones: "nuevo lead: ACME", "suscripción ACME SL_1_EMP", "emitir facturas suscripciones", "presupuesto llc".' })
}
