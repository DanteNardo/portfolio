'use client'

import { useSearchParams } from 'next/navigation'

export default function RenderIfQuery({
  query,
  value,
  renderIfMissing = false,
  children,
}: {
  query: string
  value: string
  renderIfMissing?: boolean
  children: React.ReactNode
}) {
  const searchParams = useSearchParams()
  const param = searchParams.get(query)
  const paramEquals = param === value
  const shouldRenderWhenMissing =
    renderIfMissing && (param === '' || param === null)
  const shouldRender = paramEquals || shouldRenderWhenMissing

  return shouldRender ? <>{children}</> : <></>
}
