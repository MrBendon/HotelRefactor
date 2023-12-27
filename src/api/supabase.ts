import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabaseType";
const supabaseUrl = "https://qzvlabepqzdmhfihotwy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6dmxhYmVwcXpkbWhmaWhvdHd5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTU5NjYxMjUsImV4cCI6MjAxMTU0MjEyNX0.3q16TFrUoFSbKnUVgrpi3g4QHzi7mTgWMVI6xWwopME";
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
