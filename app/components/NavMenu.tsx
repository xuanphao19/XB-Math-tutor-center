// components/NavMenu.tsx
'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn, smoothScrollTo } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'Giới thiệu' },
  { href: '#courses', label: 'Khóa học' },
  { href: '#teachers', label: 'Giảng viên' },
  { href: '#testimonials', label: 'Học viên nói gì' },
  { href: '#contact', label: 'Liên hệ' },
];
interface NavMenuProps {
  className?: string;
}

export default function NavMenu({ className }: NavMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    smoothScrollTo(href, 80); // offset 80px
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav
        className={cn('hidden md:flex items-center gap-8 text-sm font-medium', className)}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className='relative text-foreground hover:text-primary transition-colors duration-200 py-2 group cursor-pointer'
          >
            {link.label}
            <span className='absolute bottom-0 left-0 h-0.5 w-0 bg-primary group-hover:w-full transition-all duration-300' />
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='md:hidden p-2 text-foreground hover:text-primary transition-colors'
        aria-label='Toggle menu'
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Slide-in Menu */}
      <div
        className={cn(
          'fixed inset-y-0 left-0 z-50 h-screen w-[80%] max-w-95 bg-background shadow-2xl md:hidden transition-transform duration-300 ease-out',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className='flex flex-col'>
          <div className='flex items-center justify-between p-6 border-b border-border'>
            <div className='font-bold text-xl text-primary hover:text-primary/80'>
              Không chỉ giỏi hơn - Mà tốt hơn!
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X
                className='text-primary hover:text-primary/80'
                size={28}
              />
            </button>
          </div>

          <nav className='flex-1 px-6 py-8 flex flex-col gap-2 text-lg'>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className={cn(
                  'group px-5 py-4 rounded-md font-medium transition-all duration-300 ease-out',
                  'hover:bg-accent hover:text-accent-foreground',
                  'active:scale-[0.97] active:bg-accent/80',
                  'dark:hover:bg-zinc-800 dark:text-white/50 dark:hover:text-white',
                  'relative overflow-hidden',
                  'after:absolute after:bottom-0 after:left-4 after:h-0.5 after:w-0 after:bg-primary',
                  'after:transition-all after:duration-300 group-hover:after:w-[calc(100%-32px)]',
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className='p-6 border-t border-border'>
            <a
              href='#contact'
              onClick={(e) => handleClick(e, '#contact')}
              className='block w-full bg-amber-100 text-primary hover:text-primary-foreground hover:bg-primary/90 font-semibold py-4 rounded-md text-center transition-all'
            >
              Đăng ký học ngay
            </a>
          </div>
        </div>
      </div>

      {/* Overlay với animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className='fixed inset-0 h-screen bg-black/50 z-40 md:hidden backdrop-blur-sm'
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
