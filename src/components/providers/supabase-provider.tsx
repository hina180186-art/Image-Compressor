'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import type { SupabaseClient } from '@supabase/supabase-js';

type SupabaseContextType = {
  supabase: SupabaseClient | null;
};

const Context = createContext<SupabaseContextType | undefined>(undefined);

export function SupabaseProvider({ children }: { children: React.ReactNode }) {
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null);

  useEffect(() => {
    // Initialize Supabase client only on client-side
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseAnonKey) {
      const client = createClient(supabaseUrl, supabaseAnonKey);
      setSupabase(client);
    }
  }, []);

  return (
    <Context.Provider value={{ supabase }}>
      {children}
    </Context.Provider>
  );
}

export function useSupabase() {
  const context = useContext(Context);
  if (context === undefined) {
    throw new Error('useSupabase must be used within a SupabaseProvider');
  }
  return context;
}
