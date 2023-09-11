import type { ReactNode } from 'react';

export default function CardTitle({ children }: { children: ReactNode }) {
  return <h3 className="mb-1 text-base font-medium text-white">{children}</h3>;
}
