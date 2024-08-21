'use client'

import React, { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription
} from './ui/sheet'
import { Button } from './ui/button'
import { Home, Menu } from 'lucide-react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/navigation'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

export function MobileNav () {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='w-10 px-0 sm:hidden'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle Theme</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='right'>
        <VisuallyHidden>
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Navigate through the site</SheetDescription>
        </VisuallyHidden>
        <MobileLink
          onOpenChange={setOpen}
          href='/'
          className='flex items-center'
        >
          <Home className='h-5 w-5' />
          <span className='sr-only'>Home</span>
        </MobileLink>
        <div className='flex flex-col gap-3 mt-3'>
          <MobileLink onOpenChange={setOpen} href='/about'>
            About
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/projects'>
            Projects
          </MobileLink>
          <MobileLink onOpenChange={setOpen} href='/blog'>
            Blog
          </MobileLink>
        </div>
      </SheetContent>
    </Sheet>
  )
}

interface MobileLinkProps extends LinkProps {
  children: React.ReactNode
  onOpenChange?: (open: boolean) => void
  className?: string
}

function MobileLink ({
  href,
  onOpenChange,
  children,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter()
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={className}
      {...props}
    >
      {children}
    </Link>
  )
}
