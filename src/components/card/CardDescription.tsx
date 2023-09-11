import type { ReactNode } from 'react';

export default function CardDescription({ children }: { children: ReactNode }) {
  return <p className="text-sm">{children}</p>;
}
