import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL="https://hiylidsohbuvsoqzztaz.supabase.co";
const SUPABASE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpeWxpZHNvaGJ1dnNvcXp6dGF6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTY2MTIsImV4cCI6MjA2NjQzMjYxMn0.ficyCyXi2h840ytX2OGJHiCc17dNTCXjYrWne24XTrM";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export function useSupabaseClient() {
  return supabase;
}