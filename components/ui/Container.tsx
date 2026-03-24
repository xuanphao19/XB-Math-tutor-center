// components/ui/Container.tsx

'use client';
import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export default function Container({
  children,
  className = `px-4 xl:max-w-5/6`,
  id,
}: ContainerProps) {
  return (
    <div
      id={id}
      className={`w-full mx-auto ${className}`}
    >
      {children}
    </div>
  );
}

// container
