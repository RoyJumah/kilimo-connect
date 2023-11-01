import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qywftlydzqvuwwhibviy.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF5d2Z0bHlkenF2dXd3aGlidml5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4Mzk1OTEsImV4cCI6MjAxNDQxNTU5MX0.ZJ5KwYwJDiCnbOA-V39rdTjr8HtzhrYBFqOYTIbEh_4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
