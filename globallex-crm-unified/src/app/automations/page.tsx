'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type FE = { id?: string, model_code: string, period_label?: string, due_date: string, remind_days?: number[], channel?: string[] }

export default function Automations(){
  const [rows, setRows] = useState<FE[]>([])
  const [form, setForm] = useState<FE>({ model_code:'303', due_date: new Date().toISOString().slice(0,10), remind_days:[7,3,1], channel:['email','whatsapp'] })

  async function load(){ const { data } = await supabase.from('fiscal_events').select('*').order('due_date'); setRows(data||[]) }
  useEffect(()=>{ load() }, [])

  async function add(){
    const { error } = await supabase.from('fiscal_events').insert([form])
    if(error) return alert(error.message)
    setForm({ model_code:'303', due_date: new Date().toISOString().slice(0,10), remind_days:[7,3,1], channel:['email','whatsapp'] })
    load()
  }

  return (
    <div className="space-y-4">
      <section className="card p-4 space-y-2">
        <h2 className="text-lg font-semibold">Recordatorios fiscales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          <input className="input" placeholder="Modelo (303/130/111/...)" value={form.model_code} onChange={e=>setForm({...form, model_code:e.target.value})} />
          <input className="input" placeholder="Periodo (1T 2025)" value={form.period_label||''} onChange={e=>setForm({...form, period_label:e.target.value})} />
          <input className="input" type="date" value={form.due_date} onChange={e=>setForm({...form, due_date:e.target.value})} />
        </div>
        <button className="btn" onClick={add}>Añadir</button>
      </section>

      <section className="card p-4">
        <h3 className="font-semibold mb-2">Calendario</h3>
        <ul className="space-y-1">
          {rows.map(r=> <li key={r.id} className="flex gap-3 items-center"><span className="badge border-slate-300">{r.model_code}</span><span>{r.period_label}</span><span className="font-mono text-xs">{r.due_date}</span></li>)}
        </ul>
      </section>
    </div>
  )
}
