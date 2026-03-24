// components/ui/Section.tsx

'use client';
import { ReactNode } from 'react';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  bgColor?: string;
  paddingY?: string;
};

export default function Section({
  children,
  className = 'text-foreground',
  id,
  bgColor = 'bg-background dark:bg-gray-900',
  paddingY = 'py-12 sm:py-16',
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${bgColor} ${paddingY} ${className} transition-all duration-300 ease-linear`}
    >
      {children}
    </section>
  );
}
