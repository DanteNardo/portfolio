'use client'

import { Tab } from '@headlessui/react'

export default function SampleTabGroup({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="isolate min-w-xl rounded-md border-[1px] border-base-600 bg-base-900">
      <Tab.Group>{children}</Tab.Group>
    </div>
  )
}
