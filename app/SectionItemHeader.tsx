export default function SectionItemHeader({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h3 className="flex gap-2 items-end text-base font-semibold tracking-tight text-base-300">
      {children}
    </h3>
  )
}
