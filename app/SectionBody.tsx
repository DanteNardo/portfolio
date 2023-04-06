export default function SectionBody({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return <div className={`flex flex-col gap-2 ${className}`}>{children}</div>
}
