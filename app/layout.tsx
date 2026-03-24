// app/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';
import Sidebar from './components/Sidebar';

export const metadata = {
  title: 'Trung Tâm Toán Hóa 6-12',
  description: 'Không chỉ giỏi hơn – mà tốt hơn',
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
          <Header />
          <div className='flex'>
            <Sidebar />
            <main
              id='main-scroll'
              className='flex-1 min-w-0 h-[calc(100vh-200px)] overflow-y-auto no-scrollbar'
            >
              {children}
              <Footer />
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
