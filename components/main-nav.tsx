'use client'

import Link from 'next/link'
import { Icons } from './icons'
import { siteConfig } from '@/config/site'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
export function MainNav () {
  const pathname = usePathname()
  return (
    <nav className='flex items-center space-x-4 lg:space-x-6'>
      <Link href='/' className='mr-6 flex items-center space-x-2'>
        <Icons.logo className='h-6 w-6' />
        <span className='font-bold'>{siteConfig.name}</span>
      </Link>
      <Link
        href='/about'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/about' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        About
      </Link>
      <Link
        href='/projects'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/projects' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Projects
      </Link>
      <Link
        href='/blog'
        className={cn(
          'text-sm font-medium transition-colors hover:text-primary',
          pathname === '/blog' ? 'text-foreground' : 'text-foreground/60'
        )}
      >
        Blog
      </Link>
    </nav>
  )
}