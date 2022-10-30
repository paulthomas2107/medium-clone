import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { Box } from '../components/Box';

// Providers - Supabase, nextui etc

// Navbar
// Box Component for content

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <SessionContextProvider supabaseClient={supabaseClient}>
      <NextUIProvider>
        {/* Navbar */}
        <Box css={{ px: "$12", py: "$15", mt: "$12", "@xsMax": {px: "$10"}, maxWidth: "800px", margin: "0 auto" }}>
         <Component {...pageProps} />
        </Box>
      </NextUIProvider>
    </SessionContextProvider>
  );
}
