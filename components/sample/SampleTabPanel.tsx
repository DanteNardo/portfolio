'use client'

import { Tab } from '@headlessui/react'

export default function SampleTab({ children }: { children: React.ReactNode }) {
  return <Tab.Panel>{children}</Tab.Panel>
}
