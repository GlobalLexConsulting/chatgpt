import { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY!)

export async function POST(req: NextRequest){
  try{
    const form = await req.formData()
    const token = String(form.get('token')||'')
    const email = String(form.get('email')||'')
    const file = form.get('file') as File | null
    const kind = String(form.get('kind')||'invoice')

    if(!token || !file) return new Response('Missing token/file', { status: 400 })

    const { data: pt } = await supabase.from('portal_tokens').select('*').eq('token', token).maybeSingle()
    if(!pt) return new Response('Invalid token', { status: 401 })
    if(pt.expires_at && new Date(pt.expires_at) < new Date()) return new Response('Expired token', { status: 401 })

    const key = `invoices/${pt.org_id}/${pt.client_id}/${Date.now()}-${file.name}`
    const upload = await supabase.storage.from('docs').upload(key, file.stream(), { contentType: file.type, upsert: false })
    if(upload.error) return new Response(upload.error.message, { status: 500 })

    const { error: e2 } = await supabase.from('client_uploads').insert([{
      org_id: pt.org_id, client_id: pt.client_id, uploader_email: email || null,
      file_name: file.name, mime: file.type, size: file.size, storage_key: key, kind
    }])
    if(e2) return new Response(e2.message, { status: 500 })

    return new Response(JSON.stringify({ ok: true, key }), { status: 200 })
  }catch(e:any){
    return new Response(e.message || 'Upload error', { status: 500 })
  }
}
