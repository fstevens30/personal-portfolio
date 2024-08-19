'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSun,
  faMoon,
  faAdjust,
  faHome
} from '@fortawesome/free-solid-svg-icons'

import NavItem from './nav-item'

export default function Nav () {
  const [theme, setTheme] = useState('auto')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const applyTheme = (theme: string) => {
    const root = document.documentElement
    if (theme === 'light') {
      root.style.setProperty('--foreground-rgb', '0, 0, 0')
      root.style.setProperty('--background-rgb', '255, 255, 255')
    } else if (theme === 'dark') {
      root.style.setProperty('--foreground-rgb', '255, 255, 255')
      root.style.setProperty('--background-rgb', '0, 0, 0')
    } else {
      // Auto theme: use system preference
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
      if (prefersDark) {
        root.style.setProperty('--foreground-rgb', '255, 255, 255')
        root.style.setProperty('--background-rgb', '0, 0, 0')
      } else {
        root.style.setProperty('--foreground-rgb', '0, 0, 0')
        root.style.setProperty('--background-rgb', '255, 255, 255')
      }
    }
  }
  const handleThemeChange = (theme: string) => {
    setTheme(theme)
    setDropdownOpen(false)
  }
  useEffect(() => {
    applyTheme(theme)
  }, [theme])
  return (
    <nav className='bg-transparent p-4 flex justify-evenly items-center'>
      <div className='flex items-center'>
        <Link href='/' passHref>
          <span className='text-gray-400 hover:text-gray-800'>
            <FontAwesomeIcon icon={faHome}/>
          </span>
        </Link>
      </div>
      <ul className='flex space-x-8'>
        <NavItem href='/about' text='About' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/blog' text='Blog' />
      </ul>
      <div className='relative'>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className='text-gray-400 hover:text-gray-800 flex items-center'
        >
          {theme === 'auto' && <FontAwesomeIcon icon={faAdjust} />}
          {theme === 'light' && <FontAwesomeIcon icon={faSun} />}
          {theme === 'dark' && <FontAwesomeIcon icon={faMoon} />}
        </button>
        {dropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg'>
            <button
              onClick={() => handleThemeChange('auto')}
              className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
            >
              <FontAwesomeIcon icon={faAdjust} /> Auto
            </button>
            <button
              onClick={() => handleThemeChange('light')}
              className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
            >
              <FontAwesomeIcon icon={faSun} /> Light
            </button>
            <button
              onClick={() => handleThemeChange('dark')}
              className='block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100'
            >
              <FontAwesomeIcon icon={faMoon} /> Dark
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
