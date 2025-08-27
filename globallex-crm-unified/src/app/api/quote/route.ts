import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(req: NextRequest){
  const { type='LLC_US', extras=[], employees=0 } = await req.json()
  const { data: svcs } = await supabase.from('services').select('*').in('code', ['INC_SL_PAE','INC_CB','NIF_FOREIGN_VIES','LLC_US','EMPLOYEE_ADD'])
  const find = (code:string) => (svcs||[]).find((s:any)=> s.code===code)
  const lines:any[] = []

  if(type==='LLC_US'){
    lines.push({ code:'LLC_US', name:'LLC (US) Incorporation', amount: 0 })
  }else if(type==='SL_ES'){
    const sl = find('INC_SL_PAE'); if(sl) lines.push({ code: sl.code, name: sl.name_es, amount: sl.retail_price_min })
  }else if(type==='CB_ES'){
    const cb = find('INC_CB'); if(cb) lines.push({ code: cb.code, name: cb.name_es, amount: cb.retail_price_min })
  }
  if(employees>1){
    const add = find('EMPLOYEE_ADD')
    const extrasCount = Math.max(0, employees-1)
    if(add) lines.push({ code: add.code, name: `${add.name_es} (${extrasCount})`, amount: extrasCount * (add.retail_price_min||0) })
  }

  const total = lines.reduce((s,l)=> s + (l.amount||0), 0)
  return Response.json({ lines, total })
}
