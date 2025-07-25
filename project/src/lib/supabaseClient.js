import { createClient } from '@supabase/supabase-js'

// Export the credentials so they can be imported elsewhere
export const supabaseUrl = "https://elojiyegwyaeweettxjc.supabase.co"
export const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsb2ppeWVnd3lhZXdlZXR0eGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzM3NDMsImV4cCI6MjA2MTYwOTc0M30.f6xrkx64H7N-xbscqDmS8Q18w3P7D8dGMSs4Xz54NWk"

// Ensure only one instance is created and exported
export const supabase = createClient(supabaseUrl, supabaseAnonKey);