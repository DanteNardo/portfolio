export default function SectionItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className="p-2 rounded-xl action-border">
      {children}
    </a>
  )
}
