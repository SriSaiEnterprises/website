// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://kptdchovhntrmsovkqoh.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwdGRjaG92aG50cm1zb3ZrcW9oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxOTEyODcsImV4cCI6MjA1NDc2NzI4N30.oy68vTi2g9x9JYyDz8vvRQXiSpr7ExB8v8qAY5Yq5tc";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);