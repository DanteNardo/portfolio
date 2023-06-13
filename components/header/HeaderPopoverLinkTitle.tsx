'use client'

import { ReactNode } from 'react'

export default function HeaderPopoverLinkTitle({
  children,
}: {
  children: ReactNode
}) {
  return <h3 className="flex gap-2 items-center text-focus">{children}</h3>
}
