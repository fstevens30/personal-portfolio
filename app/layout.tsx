import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { Providers } from '@/components/providers'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Flynn Stevens',
  description:
    'Personal portfolio site for Flynn Stevens, Software development student at Ara Institute of Canterbury.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['portfolio', 'software developer', 'new zealand', 'flynn stevens'],
  authors: [
    {
      name: 'Flynn Stevens'
    }
  ],
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/profile-128.png' },
    { rel: 'icon', url: 'icons/profile-128.png' }
  ]
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ]
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='scroll-pt-[3.5rem]'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter.variable
        )}
      >
        <Providers>
          <div className='relative flex min-h-dvh flex-col bg-background'>
            <SiteHeader />
            <main className='flex-1'>{children}</main>
          </div>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
