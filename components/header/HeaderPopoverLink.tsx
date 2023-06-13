'use client'

import { ReactNode } from 'react'

export default function HeaderPopoverLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <a
      href={href}
      className="flex flex-col gap-1 p-2 rounded-lg text-sm hover:bg-base-800"
    >
      {children}
    </a>
  )
}
