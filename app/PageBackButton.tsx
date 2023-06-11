import classNames from 'classnames'
import Link from 'next/link'
import { GoArrowLeft } from 'react-icons/go'

export default function PageBackButton({
  href = '/',
  className,
}: {
  href?: string
  className?: string
}) {
  const conditionalClassName = classNames({
    'inline-flex mb-6 p-1 justify-center items-center rounded-full text-xl text-black bg-base-300':
      true,
    className: className,
  })

  return (
    <Link title="Back to home" href={href} className={conditionalClassName}>
      <GoArrowLeft size={36} />
    </Link>
  )
}
