import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://adbozrnaupewolsuuuew.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkYm96cm5hdXBld29sc3V1dWV3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM2OTIyNTAsImV4cCI6MjAxOTI2ODI1MH0.2NfGXdWcNS3Hy5ICoc29P1ekrHbDbGzvSIbzJvwcB4k"

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase