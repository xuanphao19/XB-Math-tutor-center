// components/ui/Logo.tsx

'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { ReactNode } from 'react';
import { scrollToTop } from '@/lib/utils';

type LogoProps = {
  alt?: string;
  href?: string;
  imgSrc?: string;
  children?: ReactNode;
  isLogoHeaderHome?: boolean;
  className?: string;
  classContent?: string;
};

export default function Logo({
  alt = '',
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
        onClick={() => scrollToTop(0)}
      >
        <img
          src={imgSrc}
          alt={alt ?? 'Logo'}
          className='logo-img h-7 w-7 object-contain drop-shadow-sm'
        />
      </Link>

      {children && (
        <Link
          href={href}
          className={cn(
            'logo-text font-semibold text-sm tracking-tight transition-colors',
            'text-foreground hover:text-primary line-clamp-1',
            classContent,
          )}
          onClick={() => scrollToTop(0)}
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
