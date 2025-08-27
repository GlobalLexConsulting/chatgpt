'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { eur } from '@/lib/helpers'

export default function Catalog(){
  const [rows, setRows] = useState<any[]>([])
  const [showCosts, setShowCosts] = useState(false)
  const [q, setQ] = useState('')

  useEffect(()=>{ (async ()=>{ const { data } = await supabase.from('services').select('*').order('category') ; setRows(data||[]) })() },[])

  const filtered = rows.filter(r => (r.name_es||'').toLowerCase().includes(q.toLowerCase()) || (r.code||'').toLowerCase().includes(q.toLowerCase()))

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Catálogo de servicios</h2>
        <label className="ml-auto text-sm flex items-center gap-2"><input type="checkbox" checked={showCosts} onChange={e=>setShowCosts(e.target.checked)} />Ver costes internos</label>
        <input className="input max-w-xs" placeholder="Buscar..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map(s => (
          <div key={s.id} className="card p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-semibold">{s.name_es}</div>
                <div className="text-xs text-slate-500">{s.code} · {s.category}</div>
              </div>
              <div className="text-right">
                <div className="text-sm">PVP: <b>{eur(s.retail_price_min)}</b>{s.retail_price_max && s.retail_price_max!==s.retail_price_min ? `–${eur(s.retail_price_max)}` : ''}</div>
                {showCosts && <div className="text-xs text-rose-600">Coste: {eur(s.internal_cost_min)}{s.internal_cost_max && s.internal_cost_max!==s.internal_cost_min ? `–${eur(s.internal_cost_max)}` : ''}</div>}
              </div>
            </div>
            {s.notes && <p className="mt-2 text-sm text-slate-600">{s.notes}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
