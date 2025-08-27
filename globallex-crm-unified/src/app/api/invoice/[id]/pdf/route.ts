import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import PDFDocument from 'pdfkit'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest, { params }: { params: { id: string } }){
  const id = params.id
  const { data: inv } = await supabase.from('invoices').select('*').eq('id', id).single()
  if(!inv) return new Response('Not found', { status: 404 })
  const { data: items } = await supabase.from('invoice_items').select('*').eq('invoice_id', inv.id)
  const { data: client } = await supabase.from('clients').select('*').eq('id', inv.client_id).single()
  const { data: issuer } = await supabase.from('issuer_profiles').select('*').eq('org_id', inv.org_id).eq('is_default', true).single()

  const doc = new PDFDocument({ size: 'A4', margin: 50 })
  const chunks: Buffer[] = []
  doc.on('data', (c: Buffer)=> chunks.push(c))
  const done = new Promise<Buffer>((resolve)=> doc.on('end', ()=> resolve(Buffer.concat(chunks))))

  doc.fontSize(16).text(`Factura ${inv.number || inv.id}`, 50, 40)
  doc.fontSize(10).text(`Fecha: ${inv.issue_date}`)
  doc.text(`Vencimiento: ${inv.due_date}`)

  doc.fontSize(10).text(`
Emisor: ${issuer?.legal_name || ''}
${issuer?.tax_id || ''}
${issuer?.address || ''}`)
  doc.text(`IBAN: ${issuer?.iban || ''} | SWIFT: ${issuer?.swift_bic || ''}`)

  doc.moveDown().fontSize(10).text(`Cliente: ${client?.name || ''}`)
  if(client?.email) doc.text(`Email: ${client.email}`)

  const headers = ['Descripción','Cant.','Precio','IVA %','IRPF %','Importe']
  const startY = doc.y + 10
  const colX = [50, 300, 350, 410, 460, 510]
  doc.fontSize(10)
  headers.forEach((h,i)=> doc.text(h, colX[i], startY))
  doc.moveTo(50, startY+12).lineTo(560, startY+12).stroke()

  let y = startY + 18
  const lines = (items && items.length) ? items : [{
    description: 'Servicios profesionales',
    quantity: 1,
    unit_price: inv.base || 0,
    vat_rate: inv.vat_rate || 21,
    irpf_rate: inv.irpf_rate || 0,
    line_total: inv.base || 0
  }]

  for(const it of lines){
    doc.text(String(it.description || ''), colX[0], y, { width: 240 })
    doc.text(String(it.quantity || 1), colX[1], y)
    doc.text((it.unit_price || 0).toFixed(2), colX[2], y)
    doc.text(String(it.vat_rate || 0), colX[3], y)
    doc.text(String(it.irpf_rate || 0), colX[4], y)
    doc.text((it.line_total || 0).toFixed(2), colX[5], y)
    y += 16
  }

  const base = lines.reduce((s:any,l:any)=> s + Number(l.line_total||0), 0)
  const iva = lines.reduce((s:any,l:any)=> s + Number(l.line_total||0)*(Number(l.vat_rate||0)/100), 0)
  const irpf = lines.reduce((s:any,l:any)=> s + Number(l.line_total||0)*(Number(l.irpf_rate||0)/100), 0)
  const total = Math.max(0, base + iva - irpf)

  doc.moveDown(2)
  doc.fontSize(11).text(`Base imponible: ${base.toFixed(2)} €`, { align:'right' })
  doc.text(`IVA: ${iva.toFixed(2)} €`, { align:'right' })
  doc.text(`IRPF: ${irpf.toFixed(2)} €`, { align:'right' })
  doc.fontSize(12).text(`TOTAL: ${total.toFixed(2)} €`, { align:'right' })

  doc.moveDown(0.5).fontSize(8).fillColor('#777').text('Tasas oficiales no incluidas salvo indicación expresa.')

  doc.end()
  const pdf = await done
  return new Response(pdf, { status: 200, headers: { 'Content-Type': 'application/pdf', 'Content-Disposition': `inline; filename="${inv.number || inv.id}.pdf"` } })
}
