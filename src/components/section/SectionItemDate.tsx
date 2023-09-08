export default function SectionItemDate({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <span className="hidden sm:inline print:inline grow text-xs text-right leading-5 font-mono text-base-400">
      {children}
    </span>
  )
}
