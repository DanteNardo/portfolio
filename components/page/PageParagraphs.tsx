import classNames from 'classnames'

export default function PageParagraphs({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const conditionalClassName = classNames({
    'flex flex-col max-w-[60ch] gap-6': true,
    className: className,
  })

  return <div className={conditionalClassName}>{children}</div>
}
