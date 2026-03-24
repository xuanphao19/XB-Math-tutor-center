// app/components/Header.tsx

'use client';

import Container from '@/components/ui/Container';
import Logo from '@/components/ui/Logo';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher';
import NavMenu from './NavMenu';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm'>
      <Container className='flex h-16 items-center justify-between'>
        <div className='flex flex-1 justify-between items-center flex-row-reverse md:flex-row'>
          <Logo
            className='m-auto md:m-0'
            isLogoHeaderHome={true}
          >
            XB Math
          </Logo>
          <NavMenu className={'hidden md:flex'} />
        </div>
        <div className='flex items-center gap-3'>
          <ThemeSwitcher />
          <Button
            className={cn(
              'px-4 py-2.5 text-xs font-medium rounded-sm transition-all',
              'bg-primary text-primary-foreground hover:bg-primary/90',
              'active:scale-[0.985]',
            )}
          >
            Đăng ký
          </Button>
        </div>
      </Container>
    </header>
  );
}
