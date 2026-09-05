import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";

dotenv.config();

const rawUrl = process.env.SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseUrl = rawUrl.trim().replace(/\/rest\/v1\/?$/, "").replace(/\/$/, "");
const supabaseKey = (process.env.SUPABASE_KEY || process.env.SUPABASE_ANON_KEY || "placeholder-key").trim();

if (!process.env.SUPABASE_URL || (!process.env.SUPABASE_KEY && !process.env.SUPABASE_ANON_KEY)) {
  console.warn("⚠️ PERINGATAN: SUPABASE_URL atau SUPABASE_KEY belum diisi di file .env!");
}

export const supabase = createClient(supabaseUrl, supabaseKey);

