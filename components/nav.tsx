'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
  faAdjust,
  faHome
} from '@fortawesome/free-solid-svg-icons'
import { ModeToggle } from './mode-toggle'

import NavItem from './nav-item'

export default function Nav () {
  return (
    <nav>
      <div>
        <Link href='/' passHref>
          <span>
            <FontAwesomeIcon icon={faHome} />
          </span>
        </Link>
      </div>
      <ul>
        <NavItem href='/about' text='About' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/blog' text='Blog' />
      </ul>
      <ModeToggle />
    </nav>
  )
}
