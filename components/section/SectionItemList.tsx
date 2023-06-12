export default function SectionItemList({
  children,
}: {
  children: React.ReactNode
}) {
  return <ul className="pl-4 list-disc text-sm">{children}</ul>
}
