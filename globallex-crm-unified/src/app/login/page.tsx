'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  async function signUp(){
    const { error } = await supabase.auth.signUp({ email, password })
    setMsg(error ? error.message : 'Revisa tu email para confirmar.')
  }
  async function signIn(){
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setMsg(error ? error.message : 'Acceso correcto.')
  }

  return (
    <div className="max-w-sm mx-auto card p-6 space-y-2">
      <h2 className="text-lg font-semibold">Acceso</h2>
      <input className="input" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
      <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
      <div className="flex gap-2">
        <button className="btn" onClick={signIn}>Entrar</button>
        <button className="btn" onClick={signUp}>Crear cuenta</button>
      </div>
      {msg && <div className="text-sm">{msg}</div>}
    </div>
  )
}
