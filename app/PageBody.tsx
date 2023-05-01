import classNames from 'classnames'

export default function PageBody({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'flex flex-col lg:flex-row gap-6': true,
    className: className,
  })

  return <div className={conditionalClassName}>{children}</div>
}
