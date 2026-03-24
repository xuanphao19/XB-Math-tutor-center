// components/ui/ThemeSwitcher.tsx
'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Button } from './button';
import { cn } from '@/lib/cn';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Tránh lỗi hydration
  if (!mounted) {
    return (
      <Button
        size='icon'
        variant='ghost'
        className='w-10 h-10 size-4'
        aria-hidden='true'
      />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <Button
      size='icon'
      variant='ghost'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'group relative w-9 h-9 rounded-full',
        'hover:bg-accent hover:text-accent-foreground',
        'focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
        'transition-all duration-300 active:scale-95',
      )}
      title='Chuyển đổi giao diện'
      aria-label='Toggle theme'
    >
      <div className='absolute inset-0 bg-linear-to-br from-primary/10 to-accent/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity' />

      {isDark ? (
        <Sun className='w-6 h-6 text-yellow-400 transition-transform group-hover:rotate-12' />
      ) : (
        <Moon className='w-6 h-6 text-foreground/80 transition-transform group-hover:-rotate-12' />
      )}
    </Button>
  );
}
