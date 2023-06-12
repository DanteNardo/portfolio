'use client'

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

export default function SampleTab({ children }: { children: React.ReactNode }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={
            selected
              ? 'group px-3 py-2 first:rounded-tl-md last:rounded-tr-md border-r border-base-600 bg-black'
              : 'group px-3 py-2 first:rounded-tl-md last:rounded-tr-md border-r border-base-600'
          }
        >
          <span
            className={
              selected
                ? 'px-2 py-1 rounded-lg font-semibold text-focus group-hover:bg-base-800'
                : 'px-2 py-1 rounded-lg font-semibold text-default group-hover:text-focus group-hover:bg-base-800'
            }
          >
            {children}
          </span>
        </button>
      )}
    </Tab>
  )
}
