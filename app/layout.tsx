import './globals.css'
import { Inter } from 'next/font/google'
import { Space_Mono } from 'next/font/google'

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
    <html
      lang="en"
      className={`${inter.variable} ${space_mono.className} font-sans`}
    >
      <body>{children}</body>
    </html>
  )
}
