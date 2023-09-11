export default function SectionItemHeaderHorizontal({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="flex gap-2 mb-1 items-end">{children}</div>
}
