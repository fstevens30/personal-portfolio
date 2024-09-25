import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { SiteHeader } from '@/components/site-header'
import { Providers } from '@/components/providers'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Flynn Stevens',
  description:
    'Personal portfolio site for Flynn Stevens, Software development student at Ara Institute of Canterbury.',
  generator: 'Next.js',
  manifest: '/manifest.json',
  keywords: ['portfolio', 'software developer', 'new zealand', 'flynn stevens'],
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#1a202c' },
    { media: '(prefers-color-scheme: light)', color: '#f7fafc' }
  ],
  authors: [
    {
      name: 'Flynn Stevens'
    }
  ],
  viewport:
    'minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover',
  icons: [
    { rel: 'apple-touch-icon', url: 'icons/profile-128.png' },
    { rel: 'icon', url: 'icons/profile-128.png' }
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
      </body>
    </html>
  )
}
