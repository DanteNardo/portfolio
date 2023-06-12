import classNames from 'classnames'

export default function PageTitle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'mb-6 text-6xl font-bold tracking-tighter text-focus': true,
    className: className,
  })

  return <h1 className={conditionalClassName}>{children}</h1>
}
