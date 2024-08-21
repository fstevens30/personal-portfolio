'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Home } from 'lucide-react'
export function MainNav () {
  const pathname = usePathname()
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Home className='h-5 w-5' />
      </Link>
      <Link
        href='/about'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        About
      </Link>
      <Link
        href='/projects'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/projects' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Projects
      </Link>
      <Link
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary hidden sm:inline-block',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
    </nav>
  )
}
