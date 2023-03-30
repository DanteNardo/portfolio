export default function SectionHeader({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2
      className={`mb-1 text-2xl font-bold tracking-tight font-mono text-base-300 ${className}`}
    >
      {children}
    </h2>
  )
}
