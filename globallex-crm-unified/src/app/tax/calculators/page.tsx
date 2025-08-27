'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import { eur } from '@/lib/helpers'

type Invoice = { base: number, vat_rate: number, irpf_rate: number, status: string, issue_date: string }
type Expense = { amount: number, date: string, category: string }

export default function Calculators(){
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [expenses, setExpenses] = useState<Expense[]>([])
  const [year, setYear] = useState(new Date().getFullYear())
  const [quarter, setQuarter] = useState(1)

  useEffect(()=>{ (async ()=>{
    const { data: inv } = await supabase.from('invoices').select('base,vat_rate,irpf_rate,status,issue_date').lte('issue_date', `${year}-12-31`).gte('issue_date', `${year}-01-01`)
    setInvoices(inv||[])
    const { data: ex } = await supabase.from('expenses').select('amount,date,category').lte('date', `${year}-12-31`).gte('date', `${year}-01-01`)
    setExpenses(ex||[])
  })() },[year])

  function filtQ<T extends { issue_date?: string, date?: string }>(arr:T[]):T[]{
    const q = quarter
    return arr.filter(a=>{
      const d = new Date((a as any).issue_date || (a as any).date)
      const m = d.getMonth()+1
      return Math.ceil(m/3)===q
    })
  }

  const invQ = filtQ(invoices)
  const exQ = filtQ(expenses)

  const ivaRepercutido = invQ.reduce((s,i)=> s + (i.base||0)*(i.vat_rate||0)/100, 0)
  const ivaSoportado = exQ.reduce((s,e)=> s + (e.amount||0)*0.21, 0) // simplificado
  const iva303 = Math.max(0, ivaRepercutido - ivaSoportado)

  const irpfRet = invQ.reduce((s,i)=> s + (i.base||0)*(i.irpf_rate||0)/100, 0)
  const baseIRPF = invQ.reduce((s,i)=> s + (i.base||0),0) - exQ.reduce((s,e)=> s + (e.amount||0),0)
  const m130 = Math.max(0, 0.20 * baseIRPF - irpfRet)

  const ret111 = irpfRet
  const arr115 = 0

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold">Calculadoras fiscales (ES)</h2>
      <div className="flex gap-2">
        <input className="input w-32" type="number" value={year} onChange={e=>setYear(Number(e.target.value))} />
        <select className="select w-32" value={quarter} onChange={e=>setQuarter(Number(e.target.value))}>
          <option value={1}>1T</option><option value={2}>2T</option><option value={3}>3T</option><option value={4}>4T</option>
        </select>
      </div>
      <section className="card p-4 space-y-2">
        <h3 className="font-semibold">IVA 303 (simplificado)</h3>
        <div>IVA repercutido: <b>{eur(ivaRepercutido)}</b></div>
        <div>IVA soportado: <b>{eur(ivaSoportado)}</b></div>
        <div>Total a ingresar: <b>{eur(iva303)}</b></div>
      </section>
      <section className="card p-4 space-y-2">
        <h3 className="font-semibold">IRPF 130/131 (estimación)</h3>
        <div>Base trimestral estimada: <b>{eur(baseIRPF)}</b></div>
        <div>Pagos a cuenta: <b>{eur(m130)}</b></div>
      </section>
      <section className="card p-4 space-y-2">
        <h3 className="font-semibold">Retenciones 111/115</h3>
        <div>Modelo 111: <b>{eur(ret111)}</b></div>
        <div>Modelo 115 (alquileres): <b>{eur(arr115)}</b></div>
      </section>
      <p className="text-xs text-slate-500">Resultados orientativos: ajusta tipos reducidos, exenciones y prorrata.</p>
    </div>
  )
}
