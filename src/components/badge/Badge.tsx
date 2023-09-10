import type { ReactNode } from 'react';

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <li className="px-3 py-0.5 rounded-lg text-sm font-mono bg-theme-700 text-white">
      {children}
    </li>
  );
}
