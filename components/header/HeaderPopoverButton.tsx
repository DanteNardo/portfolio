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
        open ? 'text-black bg-white' : 'text-default'
      } flex gap-2 px-3 py-1.5 items-center rounded text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white mst`}
    >
      {children}
    </Popover.Button>
  )
}
