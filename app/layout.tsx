import type { Metadata } from 'next'
import { dela, figtree } from './fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Paul Chow Portfolio',
  description: "Welcome to my website. Hi, I'm Paul and I'm a fullstack react developer, this website showcases some of the works I've done so far.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${dela.variable} ${figtree.variable}`}>
      <body>{children}</body>
    </html>
  )
}
