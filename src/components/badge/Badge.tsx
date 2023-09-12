import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="not-prose px-2 rounded-xl whitespace-nowrap text-sm font-mono bg-theme-700 text-white">
      {children}
    </span>
  );
}
