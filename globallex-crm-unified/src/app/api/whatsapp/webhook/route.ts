import { NextRequest } from 'next/server'

export async function GET(req: NextRequest){
  const url = new URL(req.url)
  const mode = url.searchParams.get('hub.mode')
  const token = url.searchParams.get('hub.verify_token')
  const challenge = url.searchParams.get('hub.challenge')
  if(mode === 'subscribe' && token === process.env.WHATSAPP_VERIFY_TOKEN){
    return new Response(challenge||'', { status: 200 })
  }
  return new Response('Forbidden', { status: 403 })
}

export async function POST(req: NextRequest){
  const payload = await req.json()
  // TODO: map WhatsApp message -> /api/assistant
  return new Response('ok', { status: 200 })
}
