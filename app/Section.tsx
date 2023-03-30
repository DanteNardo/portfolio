export default function Section({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`overflow-y-auto ${className}`}>{children}</div>
}
