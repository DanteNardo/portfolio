export default function SectionHeader({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className="mb-2 text-3xl font-bold tracking-tight font-mono text-base-300">
      {children}
    </h2>
  )
}
