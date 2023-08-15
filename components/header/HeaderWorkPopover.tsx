'use client'

import { Popover } from '@headlessui/react'
import { GoBriefcase, GoCloud, GoDiamond, GoTable } from 'react-icons/go'
import { RxMix } from 'react-icons/rx'
import HeaderPopoverButton from '@/components/header/HeaderPopoverButton'
import HeaderPopoverPanel from '@/components/header/HeaderPopoverPanel'
import HeaderPopoverLink from '@/components/header/HeaderPopoverLink'
import HeaderPopoverLinkDescription from '@/components/header/HeaderPopoverLinkDescription'
import HeaderPopoverLinkTitle from '@/components/header/HeaderPopoverLinkTitle'

export default function HeaderWorkPopover() {
  return (
    <Popover className="relative z-30">
      {({ open }) => (
        <>
          <HeaderPopoverButton open={open}>
            <GoBriefcase size={16} />
            <span>Work</span>
          </HeaderPopoverButton>
          <HeaderPopoverPanel>
            <HeaderPopoverLink href="work/cloud-platform">
              <HeaderPopoverLinkTitle>
                <GoCloud size={16} />
                <span>Biosero</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                Cloud Platform
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
            <HeaderPopoverLink href="work/component-libraries">
              <HeaderPopoverLinkTitle>
                <RxMix size={16} />
                <span>Biosero</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                Component libraries
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
            <HeaderPopoverLink href="work/polygon-library">
              <HeaderPopoverLinkTitle>
                <GoDiamond size={16} />
                <span>Viasat</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                Computational geometry
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
          </HeaderPopoverPanel>
        </>
      )}
    </Popover>
  )
}
