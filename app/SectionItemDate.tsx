export default function SectionItemDate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="grow text-sm text-right leading-6 font-mono text-base-300">
      {children}
    </span>
  )
}
