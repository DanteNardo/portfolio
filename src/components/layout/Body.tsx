import type { ReactNode } from 'react'

export default function Body({ children }: { children: ReactNode }) {
  return (
    <body className="dark">
      <div
        className="w-full max-w-[100vw] max-h-[100svh] min-h-[100svh] print:!w-[816px] print:!h-[1056px] print:!m-0 items-center justify-start overflow-x-auto overflow-y-scroll print:overflow-y-hidden font-sans text-default bg-base-950 print:bg-white acc-focus"
        style={{ colorScheme: 'dark' }}
      >
        {children}
      </div>
    </body>
  )
}
