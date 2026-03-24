// components/ui/Logo.tsx

'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';

type LogoProps = {
  href?: string;
  imgSrc?: string;
  children?: string;
  isLogoHeaderHome?: boolean;
  className?: string;
  classContent?: string;
};

export default function Logo({
  href = '/',
  imgSrc = '/assets/images/Logo.png',
  children,
  isLogoHeaderHome = false,
  className = '',
  classContent,
}: LogoProps) {
  let Comp: 'h1' | 'h2' | undefined;
  if (children) {
    Comp = isLogoHeaderHome ? 'h1' : 'h2';
  }

  const content = (
    <>
      <Link
        href={href}
        className='shrink-0 transition-transform group-hover:scale-105'
      >
        <img
          src={imgSrc}
          alt={children ?? 'Logo'}
          className='h-7 w-7 object-contain drop-shadow-sm'
        />
      </Link>

      {children && (
        <Link
          href={href}
          className={cn(
            'font-semibold text-sm tracking-tight transition-colors',
            'text-foreground hover:text-primary',
            classContent,
          )}
        >
          {children}
        </Link>
      )}
    </>
  );

  return Comp ? (
    <Comp className={cn('flex items-center gap-2 group', className)}>{content}</Comp>
  ) : (
    content
  );
}
