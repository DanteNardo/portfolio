import type { ReactNode } from 'react';

export default function Grid({ children }: { children: ReactNode }) {
  return (
    <div className="not-prose grid grid-cols-1 md:grid-cols-2 gap-4">
      {children}
    </div>
  );
}
