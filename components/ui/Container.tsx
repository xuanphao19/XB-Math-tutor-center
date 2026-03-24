// components/ui/Container.tsx

'use client';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Container({ children, className = '', id }: ContainerProps) {
  return (
    <div
      id={id}
      className={`
        container
        mx-auto
        px-4 sm:px-6 md:px-8
        ${className}
      `}
    >
      {children}
    </div>
  );
}
