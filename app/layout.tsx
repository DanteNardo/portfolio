import './globals.css'
import { Inter, Space_Mono } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const space_mono = Space_Mono({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
})

export const metadata = {
  title: "Dante's Portfolio",
  description: "Dante's software engineer portfolio site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${space_mono.variable}`}>
      <body>
        <main
          className="relative flex flex-col w-screen h-screen max-w-[100vw] max-h-[100svh] gap-2 md:gap-4 print:p-0 p-4 md:p-8 items-center justify-start overflow-auto font-sans text-default bg-black print:bg-white"
          style={{ colorScheme: 'dark' }}
        >
          {children}
        </main>
      </body>
    </html>
  )
}
