export default function SectionItemSubtitle({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h4 className="text-xs leading-5 font-semibold text-base-400">
      {children}
    </h4>
  )
}
