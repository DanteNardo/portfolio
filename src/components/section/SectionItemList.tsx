export default function SectionItemList({
  children,
}: {
  children: React.ReactNode
}) {
  return <ul className="list-disc pl-4 text-sm">{children}</ul>
}
