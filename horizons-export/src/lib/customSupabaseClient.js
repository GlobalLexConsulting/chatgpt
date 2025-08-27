import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://elojiyegwyaeweettxjc.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsb2ppeWVnd3lhZXdlZXR0eGpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwMzM3NDMsImV4cCI6MjA2MTYwOTc0M30.f6xrkx64H7N-xbscqDmS8Q18w3P7D8dGMSs4Xz54NWk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);