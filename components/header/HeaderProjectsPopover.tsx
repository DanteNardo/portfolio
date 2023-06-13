'use client'

import { Popover } from '@headlessui/react'
import { GoBrowser, GoPerson } from 'react-icons/go'
import { LuGamepad2 } from 'react-icons/lu'
import HeaderPopoverButton from '@/components/header/HeaderPopoverButton'
import HeaderPopoverPanel from '@/components/header/HeaderPopoverPanel'
import HeaderPopoverLink from '@/components/header/HeaderPopoverLink'
import HeaderPopoverLinkDescription from '@/components/header/HeaderPopoverLinkDescription'
import HeaderPopoverLinkTitle from '@/components/header/HeaderPopoverLinkTitle'

export default function HeaderProjectsPopover() {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <HeaderPopoverButton open={open}>
            <GoBrowser size={16} />
            <span>Projects</span>
          </HeaderPopoverButton>
          <HeaderPopoverPanel>
            <HeaderPopoverLink href="projects/protean-rpg">
              <HeaderPopoverLinkTitle>
                <LuGamepad2 size={16} />
                <span>Protean RPG</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                Real-time sveltekit app
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
            <HeaderPopoverLink href="projects/portfolio">
              <HeaderPopoverLinkTitle>
                <GoPerson size={16} />
                <span>Portfolio</span>
              </HeaderPopoverLinkTitle>
              <HeaderPopoverLinkDescription>
                Static Next.js site
              </HeaderPopoverLinkDescription>
            </HeaderPopoverLink>
          </HeaderPopoverPanel>
        </>
      )}
    </Popover>
  )
}
