'use client'

import { Tab } from '@headlessui/react'

export default function SampleTabPanels({
  children,
}: {
  children: React.ReactNode
}) {
  return <Tab.Panels className="rounded-b-md">{children}</Tab.Panels>
}
