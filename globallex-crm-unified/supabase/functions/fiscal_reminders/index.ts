// Deno Edge Function (ejemplo): enviar recordatorios desde 'fiscal_events'
// Despliega con Supabase CLI y programa en Scheduled Functions (cron).

import { serve } from "https://deno.land/std/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

serve(async () => {
  const supabase = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!)
  const today = new Date()
  const targets:any[] = []
  for(const d of [1,3,7]){
    const due = new Date(today.getTime()+d*86400000).toISOString().slice(0,10)
    const { data } = await supabase.from('fiscal_events').select('*').eq('due_date', due)
    for(const e of (data||[])) targets.push({ ...e, days: d })
  }
  // TODO: enviar emails/WhatsApp según e.channel
  return new Response(JSON.stringify({ reminders: targets.length }))
})
