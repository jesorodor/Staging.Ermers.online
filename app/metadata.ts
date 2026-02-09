import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'ERMERS — Modern Web Experiences',
  description: 'Design. Code. Motion. Crafting modern web experiences with taste and speed.',
  keywords: ['web design', 'development', 'interactive', '3D', 'Next.js', 'creative studio'],
  authors: [{ name: 'ERMERS Studio' }],
  openGraph: {
    title: 'ERMERS — Modern Web Experiences',
    description: 'Design. Code. Motion. Crafting modern web experiences with taste and speed.',
    url: 'https://ermers.online',
    siteName: 'ERMERS',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ERMERS — Modern Web Experiences',
    description: 'Design. Code. Motion. Crafting modern web experiences with taste and speed.',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}
