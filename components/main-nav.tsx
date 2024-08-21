'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'
import { Button } from './ui/button'
export function MainNav () {
  const pathname = usePathname()
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Home className='h-5 w-5' />
        <span className='sr-only'>Home</span>
      </Link>

      <Link href='/about'>
        <Button
          variant='link'
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
            pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          About
        </Button>
      </Link>

      <Link href='/projects'>
        <Button
          variant='link'
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
            pathname === '/projects' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Projects
        </Button>
      </Link>

      <Link href='/blog'>
        <Button
          variant='link'
          className={cn(
            'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
            pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
          )}
        >
          Blog
        </Button>
      </Link>
    </nav>
  )
}
