'use client'

import { Fragment, ReactNode } from 'react'
import { Popover, Transition } from '@headlessui/react'

export default function HeaderPopoverPanel({
  children,
}: {
  children: ReactNode
}) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-200"
      enterFrom="opacity-0 translate-y-1"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-1"
    >
      <Popover.Panel className="absolute left-1/2 transform -translate-x-1/2 z-50 w-screen max-w-md lg:max-w-xl mt-4 px-4 sm:px-0">
        <div className="z-50 grid md:grid-cols-2 p-2 rounded-lg border border-base-800 bg-black">
          {children}
        </div>
      </Popover.Panel>
    </Transition>
  )
}
