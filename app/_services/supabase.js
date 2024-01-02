import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://aigdooxkrussptkeikqq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFpZ2Rvb3hrcnVzc3B0a2Vpa3FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg4NTg4NTcsImV4cCI6MjAxNDQzNDg1N30.xGKecuSwsJa_szySXdy8RhdtE3_dM-TINJ_2gwdW2yU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
