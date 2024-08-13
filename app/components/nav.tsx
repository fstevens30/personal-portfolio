'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import NavItem from './nav-item'

export default function Nav () {
  const [theme, setTheme] = useState('auto')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const selectTheme = (selectedTheme: string) => {
    setTheme(selectedTheme)
    setDropdownOpen(false)
  }

  return (
    <nav className='bg-transparent p-4 flex justify-between items-center'>
      <div className='flex items-center'>
        <a href='/' className='text-gray-400 hover:text-gray-800'>
          <Image src='/path-to-icon.png' width={8} height={8} alt='Logo' />
        </a>
      </div>
      <ul className='flex space-x-8'>
        <NavItem href='/about' text='About' />
        <NavItem href='/projects' text='Projects' />
        <NavItem href='/blog' text='Blog' />
      </ul>
      <div className='relative'>
        <button
          onClick={toggleDropdown}
          className='text-gray-400 hover:text-gray-800'
        >
          <FontAwesomeIcon icon={faPalette} />
        </button>
        {dropdownOpen && (
          <div className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg'>
            <ul>
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => selectTheme('auto')}
              >
                {theme === 'auto' && '•'} Auto
              </li>
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => selectTheme('light')}
              >
                {theme === 'light' && '•'} Light
              </li>
              <li
                className='px-4 py-2 hover:bg-gray-100 cursor-pointer'
                onClick={() => selectTheme('dark')}
              >
                {theme === 'dark' && '•'} Dark
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  )
}
