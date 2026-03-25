// components/Sidebar.tsx

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Map,
  Newspaper,
  Megaphone,
  Volume2,
  Bell,
  Speaker,
  MessageCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  {
    href: '/',
    icon: Home,
    label: 'Trang chủ',
  },
  {
    href: '/roadmap',
    label: 'Lộ trình',
    icon: Map,
  },
  {
    href: '/blog',
    label: 'Bài viết',
    icon: Newspaper,
  },
  {
    href: '/discussions',
    label: 'Bản tin',
    icon: Megaphone,
  },
];

interface SidebarProps {
  className?: string;
}

export default function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className={cn('sticky shrink-0 h-screen overflow-y-auto', className)}>
      <nav className='flex flex-col items-center pt-6'>
        <ul className='flex flex-col items-center justify-start space-y-4 h-[calc(100vh-200px)]'>
          {menuItems.map((item, i) => {
            const isActive = pathname === item.href;
            return (
              <li
                key={item.href}
                className={`${i === menuItems.length - 1 ? 'mt-auto' : ''}`}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center flex-col transition-all duration-200 group',
                    isActive
                      ? 'text-sidebar-primary font-bold dark:text-primary shadow-md'
                      : 'text-sidebar-foreground/50 hover:text-sidebar-accent-foreground',
                  )}
                >
                  <span
                    className={cn(
                      'flex items-center justify-center w-10 h-10 rounded-full font-medium transition-all duration-200 group',
                      isActive
                        ? 'bg-sidebar-primary text-sidebar-primary-foreground'
                        : 'text-sidebar-foreground/50 group-hover:bg-sidebar-accent group-hover:text-sidebar-accent-foreground',
                    )}
                  >
                    <item.icon className={cn('w-4 h-4 transition-colors')} />
                  </span>
                  <span className={cn('text-xs p-1 group-hover:shadow-md')}>
                    {item.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
