import { ReactNode } from 'react'

export default function Article({ children }: { children: ReactNode }) {
  return (
    <article className="mx-auto prose-h1:text-center prose-h1:text-7xl prose-h1:pt-16 prose-h1:tracking-tighter prose-h1:font-bold prose-h2:text-4xl prose-h2:tracking-tight">
      {children}
    </article>
  )
}
