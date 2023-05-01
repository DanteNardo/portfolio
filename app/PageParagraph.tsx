import classNames from 'classnames'

export default function PageParagraph({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'text-lg': true,
    className: className,
  })

  return <p className={conditionalClassName}>{children}</p>
}
