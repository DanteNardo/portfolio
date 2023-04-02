export default function SectionHeader({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2
      className={`mb-1 px-2 text-2xl font-bold tracking-tight font-mono text-focus ${className}`}
    >
      {children}
    </h2>
  )
}
