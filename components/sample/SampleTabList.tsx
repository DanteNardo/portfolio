'use client'

import { Tab } from '@headlessui/react'

export default function SampleTabList({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Tab.List className="flex isolate rounded-t-md border-b border-base-600 bg-gradient-to-b from-base-950 to-base-900">
      {children}
    </Tab.List>
  )
}
