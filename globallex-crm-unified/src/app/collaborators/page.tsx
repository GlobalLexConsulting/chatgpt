'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Collab = { id?: string, email: string, full_name?: string, role?: string }
type Client = { id: string, name: string }

export default function Collaborators(){
  const [rows, setRows] = useState<Collab[]>([])
  const [clients, setClients] = useState<Client[]>([])
  const [form, setForm] = useState<Collab>({ email:'', full_name:'', role:'collaborator' })
  const [selectedClient, setSelectedClient] = useState('')
  const [selectedCollab, setSelectedCollab] = useState('')

  useEffect(()=>{ (async ()=>{
    const { data: cs } = await supabase.from('collaborators').select('*').order('created_at',{ascending:false})
    setRows(cs||[])
    const { data: cl } = await supabase.from('clients').select('id,name').order('name')
    setClients(cl||[])
  })() },[])

  async function add(){
    if(!form.email) return alert('Email requerido')
    const { data, error } = await supabase.from('collaborators').insert([form]).select().single()
    if(error) return alert(error.message)
    setRows([data!, ...rows]); setForm({ email:'', full_name:'', role:'collaborator' })
  }

  async function grant(){
    if(!selectedClient || !selectedCollab) return
    const { error } = await supabase.from('client_collaborators').insert([{ org_id: null, client_id: selectedClient, collaborator_id: selectedCollab }])
    if(error) return alert(error.message)
    alert('Acceso concedido.')
  }

  return (
    <div className="space-y-4">
      <section className="card p-4 space-y-2">
        <h2 className="text-lg font-semibold">Colaboradores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input className="input" placeholder="Email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} />
          <input className="input" placeholder="Nombre" value={form.full_name||''} onChange={e=>setForm({...form, full_name:e.target.value})} />
          <select className="select" value={form.role} onChange={e=>setForm({...form, role:e.target.value})}>
            <option value="collaborator">Colaborador</option>
            <option value="auditor">Auditor</option>
          </select>
        </div>
        <button className="btn" onClick={add}>Añadir</button>
      </section>

      <section className="card p-4 space-y-2">
        <h2 className="text-lg font-semibold">Conceder acceso por cliente</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <select className="select" value={selectedCollab} onChange={e=>setSelectedCollab(e.target.value)}>
            <option value="">Selecciona colaborador</option>
            {rows.map(r=> <option key={r.id} value={r.id}>{r.full_name||r.email}</option>)}
          </select>
          <select className="select" value={selectedClient} onChange={e=>setSelectedClient(e.target.value)}>
            <option value="">Selecciona cliente</option>
            {clients.map(c=> <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <button className="btn" onClick={grant}>Conceder acceso</button>
        </div>
        <p className="text-xs text-slate-500">Los colaboradores asignados verán documentos y facturas de ese cliente.</p>
      </section>
    </div>
  )
}
