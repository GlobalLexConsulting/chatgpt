'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Subscriptions(){
  const [clients, setClients] = useState<any[]>([])
  const [services, setServices] = useState<any[]>([])
  const [subs, setSubs] = useState<any[]>([])
  const [form, setForm] = useState<any>({ client_id:'', service_code:'FREELANCER_5', quantity:1, price:49, period_months:1 })

  async function load(){
    const { data: cl } = await supabase.from('clients').select('id,name').order('name')
    const { data: sv } = await supabase.from('services').select('*').order('category')
    const { data: su } = await supabase.from('subscriptions').select('*').order('next_invoice_date')
    setClients(cl||[]); setServices(sv||[]); setSubs(su||[])
  }
  useEffect(()=>{ load() }, [])

  useEffect(()=>{
    const s = services.find(x=>x.code===form.service_code)
    if(s){ setForm((f:any)=> ({...f, price: s.retail_price_min || 0 })) }
  }, [form.service_code, services])

  async function add(){
    const { error } = await supabase.from('subscriptions').insert([form])
    if(error) return alert(error.message)
    setForm((f:any)=> ({...f, quantity:1 }))
    load()
  }

  async function runBilling(){
    const r = await fetch('/api/invoice/generate-subscriptions', { method:'POST', body: JSON.stringify({}) })
    const j = await r.json().catch(()=>({}))
    alert(`Facturas creadas: ${j.created||0}`)
  }

  return (
    <div className="space-y-4">
      <section className="card p-4 space-y-2">
        <h2 className="text-lg font-semibold">Nueva suscripción</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <select className="select" value={form.client_id} onChange={e=>setForm({...form, client_id: e.target.value})}>
            <option value="">Cliente</option>
            {clients.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select className="select" value={form.service_code} onChange={e=>setForm({...form, service_code: e.target.value})}>
            {services.filter(s=>s.billing_type!=='one_time').map(s=> <option key={s.id} value={s.code}>{s.name_es}</option>)}
          </select>
          <input className="input" type="number" placeholder="Cantidad" value={form.quantity} onChange={e=>setForm({...form, quantity: Number(e.target.value)})} />
          <input className="input" type="number" placeholder="Precio/periodo" value={form.price} onChange={e=>setForm({...form, price: Number(e.target.value)})} />
        </div>
        <button className="btn" onClick={add}>Crear suscripción</button>
      </section>

      <section className="card p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Suscripciones activas</h2>
          <button className="btn" onClick={runBilling}>Emitir facturas del periodo</button>
        </div>
        <div className="overflow-auto mt-3">
          <table className="table">
            <thead><tr><th>Cliente</th><th>Servicio</th><th>Cant.</th><th>Precio</th><th>Próx. factura</th><th>Estado</th></tr></thead>
            <tbody>
              {subs.map(s=> (
                <tr key={s.id}>
                  <td>{clients.find(c=>c.id===s.client_id)?.name || '—'}</td>
                  <td>{s.service_code}</td>
                  <td>{s.quantity}</td>
                  <td>{s.price} {s.currency}</td>
                  <td>{s.next_invoice_date}</td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
