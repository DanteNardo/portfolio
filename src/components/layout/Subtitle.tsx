import type { ReactNode } from 'react';

export default function Subtitle({ children }: { children: ReactNode }) {
  return (
    <p className="-mt-10 text-lg text-center tracking-[0.35em] uppercase">
      {children}
    </p>
  );
}
