import type { Metadata } from 'next'
import { metadata as siteMetadata } from './metadata'
import './globals.css'
import Navigation from '@/components/Navigation'
import ThemeToggle from '@/components/ThemeToggle'
import ScrollProgress from '@/components/ScrollProgress'

export const metadata: Metadata = siteMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <div className="noise-overlay" aria-hidden="true" />
        <ScrollProgress />
        <Navigation />
        <ThemeToggle />
        <main id="main">
          {children}
        </main>
      </body>
    </html>
  )
}
