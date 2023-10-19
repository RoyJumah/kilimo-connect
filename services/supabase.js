import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://yvqzpcvcpgibbhhpgcad.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2cXpwY3ZjcGdpYmJoaHBnY2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1NDc0MDIsImV4cCI6MjAxMzEyMzQwMn0.GaSswURhJ6vpsY7v80SP8Gbg3PhUnwFOTuI-vwRyTL0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
