'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

export default function HeaderPopoverLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex flex-col gap-1 p-2 rounded-lg text-sm hover:bg-base-900"
    >
      {children}
    </Link>
  )
}
