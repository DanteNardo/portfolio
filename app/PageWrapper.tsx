import classNames from 'classnames'

export default function PageWrapper({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'w-[64rem] max-w-full px-2 pt-12 md:pt-36': true,
    className: className,
  })

  return (
    <div className="flex w-full justify-center">
      <div className={conditionalClassName}>{children}</div>
    </div>
  )
}
