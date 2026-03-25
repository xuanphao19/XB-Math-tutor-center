// app/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import type { Metadata, Viewport } from 'next';
import JsonLd, { organizationSchema } from './SEO/JsonLd';

import { homeMetadata } from './SEO/home';

import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

export const metadata: Metadata = {
  ...homeMetadata,
  // override một số field nếu cần
};
export const viewport: Viewport = {
  themeColor: '#1e40af',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: true,
  // Nếu muốn hỗ trợ light/dark mode:
  // themeColor: [
  //   { media: '(prefers-color-scheme: light)', color: '#ffffff' },
  //   { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  // ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='vi'
      suppressHydrationWarning
    >
      <body className=''>
        <JsonLd data={organizationSchema} />

        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <div className='flex h-screen overflow-hidden flex-col'>
            <Header />
            <div className='flex flex-1 shrink-0 overflow-hidden'>
              <Sidebar className='w-16 top-0 border-r border-sidebar-border bg-sidebar' />
              <main
                id='main-scroll'
                className='flex-1 min-w-0 overflow-y-auto no-scrollbar'
              >
                {children}
                <Footer />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
