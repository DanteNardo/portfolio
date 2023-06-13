import { ReactNode } from 'react'

export default function HeaderPopoverLinkDescription({
  children,
}: {
  children: ReactNode
}) {
  return <p className="text-sm cursor-pointer">{children}</p>
}
