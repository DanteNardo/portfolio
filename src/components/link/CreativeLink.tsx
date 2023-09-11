import type { ReactNode } from 'react';
import { MoveRight } from 'lucide-react';

export default function CreativeLink({
  href,
  openInNewTab = false,
  children,
}: {
  href: string;
  openInNewTab: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target={openInNewTab ? '_blank' : '_self'}
      className="not-prose flex gap-2 items-center rounded-lg text-base md:text-xl font-medium cursor-pointer text-theme-500 decoration-theme-500 decoration-2 hover:underline mst"
    >
      {children}
      <MoveRight />
    </a>
  );
}
