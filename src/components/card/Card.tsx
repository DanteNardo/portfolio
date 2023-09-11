import type { ReactNode } from 'react';

export default function Card({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="relative p-4 rounded border border-base-800 bg-black hover:border-theme-700 hover:bg-theme-700/10 mst"
    >
      {children}
    </a>
  );
}
