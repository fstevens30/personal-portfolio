import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import '../styles/globals.css'
import Nav from '../components/nav'
import { ReactNode } from 'react'

import { cn } from '@/lib/utils'
import { ThemeProvider } from '../components/theme-provider'

const fontSans = FontSans({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Flynn Stevens',
  description:
    'Personal portfolio site for Flynn Stevens, Software development student at Ara Institute of Canterbury.'
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout ({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Nav />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
