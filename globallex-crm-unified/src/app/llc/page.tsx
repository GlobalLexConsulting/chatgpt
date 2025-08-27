'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function LLC(){
  const [clients, setClients] = useState<any[]>([])
  const [form, setForm] = useState<any>({ client_id:'', jurisdiction:'US', state:'Delaware', ein:true, bank:true, registered_agent:true })
  const [quote, setQuote] = useState<any>(null)

  useEffect(()=>{ (async ()=>{ const { data } = await supabase.from('clients').select('id,name').order('name'); setClients(data||[]) })() },[])

  async function getQuote(){
    const res = await fetch('/api/quote', { method: 'POST', body: JSON.stringify({ type: 'LLC_US', extras: [], employees: 0 }) })
    const j = await res.json()
    setQuote(j)
  }

  async function createCase(){
    const title = `LLC ${form.state} — ${clients.find(c=>c.id===form.client_id)?.name||''}`
    const { error } = await supabase.from('cases').insert([{ client_id: form.client_id, title, status:'todo', notes: JSON.stringify(form) }])
    if(error) return alert(error.message)
    alert('Expediente creado con checklist inicial.')
  }

  return (
    <div className="space-y-4">
      <section className="card p-4 space-y-2">
        <h2 className="text-lg font-semibold">Gestión de LLC (US)</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <select className="select" value={form.client_id} onChange={e=>setForm({...form, client_id:e.target.value})}>
            <option value="">Cliente</option>
            {clients.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <select className="select" value={form.state} onChange={e=>setForm({...form, state:e.target.value})}>
            {['Delaware','Wyoming','New Mexico','Florida','Texas'].map(s=> <option key={s} value={s}>{s}</option>)}
          </select>
          <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={form.ein} onChange={e=>setForm({...form, ein:e.target.checked})}/>EIN</label>
          <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={form.bank} onChange={e=>setForm({...form, bank:e.target.checked})}/>Cuenta bancaria</label>
          <label className="text-sm flex items-center gap-2"><input type="checkbox" checked={form.registered_agent} onChange={e=>setForm({...form, registered_agent:e.target.checked})}/>Agente registrado</label>
        </div>
        <div className="flex gap-2">
          <button className="btn" onClick={getQuote}>Calcular presupuesto</button>
          <button className="btn" onClick={createCase}>Crear expediente</button>
        </div>
        {quote && <div className="mt-2 text-sm">Presupuesto orientativo: <b>{quote.total} EUR</b></div>}
      </section>
      <section className="card p-4">
        <h3 className="font-semibold mb-2">Checklist básico</h3>
        <ul className="list-disc pl-6 text-sm">
          <li>Nombre y miembros de la LLC</li>
          <li>Estado (Delaware/Wyoming/…)</li>
          <li>Operating Agreement</li>
          <li>EIN (IRS)</li>
          <li>Agente registrado</li>
          <li>Cuenta bancaria / Merchant</li>
          <li>Sales tax / Nexus (si aplica)</li>
          <li>Bookkeeping inicial</li>
        </ul>
      </section>
    </div>
  )
}
