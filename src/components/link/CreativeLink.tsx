import type { ReactNode } from 'react';
import { MoveRight } from 'lucide-react';

export default function CreativeLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="not-prose flex gap-2 items-center rounded-lg text-xl font-medium cursor-pointer text-theme-500 decoration-theme-500 decoration-2 hover:underline mst"
    >
      {children}
      <MoveRight />
    </a>
  );
}
