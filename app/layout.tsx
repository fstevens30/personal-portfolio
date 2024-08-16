import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Nav from 'components/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Flynn Stevens',
  description:
    'Personal portfolio site for Flynn Stevens, Software development student at Ara Institute of Canterbury.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  )
}
