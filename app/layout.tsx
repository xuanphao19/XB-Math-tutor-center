// app/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

import type { Metadata } from 'next';
import { homeMetadata } from './metadata/home';
import Sidebar from './components/Sidebar';

export const metadata: Metadata = {
  ...homeMetadata,
  // override một số field nếu cần
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='vi'
      suppressHydrationWarning
    >
      <body className=''>
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
/*
 h-[calc(100vh-150px)]

*/
