import classNames from 'classnames'

export default function PageHeader({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'mb-6 text-left': true,
    className: className,
  })

  return <div className={conditionalClassName}>{children}</div>
}
