'use client'

import { Tab } from '@headlessui/react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import CodeSample from './CodeSample'

export interface CodeTab {
  text: string
  code: string
  language?: string
}

export default function CodeTabs({
  href = '/',
  tabs,
}: {
  href?: string
  tabs: CodeTab[]
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const param = searchParams.get('tab') as string
  const foundIndex = tabs?.findIndex((t) => t?.text === param)
  const selectedIndex = foundIndex === -1 ? 0 : foundIndex

  const onChange = (index: number) => {
    const tab = tabs.at(index)
    router.replace(`${href}?tab=${tab?.text}`)
  }

  return (
    <div className="isolate rounded-md border-[1px] border-base-600 bg-base-900">
      <Tab.Group selectedIndex={selectedIndex} onChange={onChange}>
        <Tab.List className="flex isolate rounded-t-md border-b border-base-600 bg-gradient-to-b from-base-950 to-base-900 font-mono">
          {tabs.map((tab, index) => (
            <Tab
              key={tab?.text}
              as={Link}
              href={`${href}?tab=${tab?.text}`}
              className={
                index === selectedIndex
                  ? 'group px-3 py-2 first:rounded-tl-md last:rounded-tr-md border-r border-base-600 bg-black'
                  : 'group px-3 py-2 first:rounded-tl-md last:rounded-tr-md border-r border-base-600'
              }
            >
              <span
                className={
                  index === selectedIndex
                    ? 'px-2 rounded-lg font-medium text-focus group-hover:bg-base-800'
                    : 'px-2 rounded-lg font-medium text-default hover:text-focus group-hover:bg-base-800'
                }
              >
                {tab?.text}
              </span>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="rounded-b-md">
          {tabs?.map((tab) => (
            <Tab.Panel key={tab?.text}>
              <CodeSample language={tab?.language}>{tab?.code}</CodeSample>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
