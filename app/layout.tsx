// app/layout.tsx
import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

import Footer from './components/Footer';
import Header from './components/Header';

import './globals.css';

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
      <body className='bg-white text-gray-800'>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

/*

git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/xuanphao19/XB-Math-tutor-center.git
git push -u origin main



  
*/
