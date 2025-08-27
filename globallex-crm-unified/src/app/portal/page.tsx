'use client'
import { useState } from 'react'

export default function PortalUpload(){
  const [token, setToken] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState<File|null>(null)
  const [msg, setMsg] = useState('')

  async function send(){
    if(!file || !token){ setMsg('Token y archivo son requeridos'); return }
    const fd = new FormData()
    fd.append('token', token)
    if(email) fd.append('email', email)
    fd.append('file', file)
    fd.append('kind', 'invoice')
    const res = await fetch('/api/portal/upload', { method: 'POST', body: fd })
    if(!res.ok){ setMsg('Error subiendo'); return }
    await res.json()
    setMsg('Subido ✓')
  }

  return (
    <div className="max-w-lg mx-auto card p-6 space-y-3">
      <h2 className="text-lg font-semibold">Subir factura (Portal de Cliente)</h2>
      <input className="input" placeholder="Token de invitación" value={token} onChange={e=>setToken(e.target.value)} />
      <input className="input" placeholder="Tu email (opcional)" value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="file" onChange={e=>setFile(e.target.files?.[0]||null)} />
      <button className="btn" onClick={send}>Subir</button>
      {msg && <div className="text-sm">{msg}</div>}
      <p className="text-xs text-slate-500">Este portal permite subir facturas seguras con un token temporal.</p>
    </div>
  )
}
