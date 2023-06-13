'use client'

import { Popover } from '@headlessui/react'
import { GoBriefcase } from 'react-icons/go'
import HeaderPopoverButton from '@/components/header/HeaderPopoverButton'
import HeaderPopoverPanel from '@/components/header/HeaderPopoverPanel'
import HeaderPopoverLink from '@/components/header/HeaderPopoverLink'
import HeaderPopoverLinkDescription from '@/components/header/HeaderPopoverLinkDescription'
import HeaderPopoverLinkTitle from '@/components/header/HeaderPopoverLinkTitle'

export default function HeaderWorkPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <HeaderPopoverButton open={open}>
            <GoBriefcase size={16} />
            <span>Work</span>
          </HeaderPopoverButton>
          <HeaderPopoverPanel>
            <HeaderPopoverLink href="work/distributed-systems">
              <HeaderPopoverLinkTitle>
                <GoBriefcase size={16} />
                <span>Biosero</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                SaaS distributed system
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
            <HeaderPopoverLink href="work/component-libraries">
              <HeaderPopoverLinkTitle>
                <GoBriefcase size={16} />
                <span>Biosero</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                Component libraries
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
          </HeaderPopoverPanel>
        </>
      )}
    </Popover>
  )
}
