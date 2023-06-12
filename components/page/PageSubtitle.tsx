import classNames from 'classnames'

export default function PageSubtitle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'mb-2 text-xl font-bold tracking-tighter font-mono': true,
    className: className,
  })

  return (
    <h2 className={conditionalClassName}>
      <span>{children}</span>
    </h2>
  )
}
