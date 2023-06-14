import { ReactNode } from 'react'

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="relative z-0 w-full max-w-5xl mx-auto px-4 md:px-12 py-6 bg-gradient-to-b from-black via-base-950 to-base-950">
      {children}
    </main>
  )
}
