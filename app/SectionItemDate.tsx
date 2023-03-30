export default function SectionItemDate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="grow text-xs text-right leading-5 font-mono text-base-300">
      {children}
    </span>
  )
}
