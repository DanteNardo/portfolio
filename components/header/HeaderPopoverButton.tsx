'use client'

import { ReactNode } from 'react'
import { Popover } from '@headlessui/react'

export default function HeaderPopoverButton({
  open,
  children,
}: {
  open: boolean
  children: ReactNode
}) {
  return (
    <Popover.Button
      className={`${
        open ? 'text-focus bg-base-800' : 'text-default'
      } flex gap-2 px-3 py-1.5 items-center rounded text-sm font-medium outline outline-2 outline-offset-2 outline-transparent focus-visible:text-focus focus-visible:bg-base-800`}
    >
      {children}
    </Popover.Button>
  )
}
