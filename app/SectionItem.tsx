import Link from 'next/link'

export default function SectionItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="p-2 rounded-xl action-border">
      {children}
    </Link>
  )
}
