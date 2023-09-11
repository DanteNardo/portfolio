import type { ReactNode } from 'react';

export default function BadgeList({ children }: { children: ReactNode }) {
  return <ul className="not-prose flex flex-wrap gap-1">{children}</ul>;
}
