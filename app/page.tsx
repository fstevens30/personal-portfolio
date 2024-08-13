import Nav from './components/nav'
import LinkButton from './components/link-button'

export default function Home () {
  return (
    <>
      <Nav />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <header className='shadow-sm rounded-lg border p-4 border-gray-200 dark:border-gray-600'>
          <h1 className='text-2xl p-2 font-semibold'>
            Kia Ora, I&apos;m Flynn
          </h1>
          <h2 className='p-2 text-gray-400'>Software Development Student</h2>

          <ul className='flex items-stretch p-4'>
            <LinkButton href='https://github.com/fstevens30' text='GitHub' />
            <LinkButton
              href='https://www.linkedin.com/in/fstevens30'
              text='LinkedIn'
            />
            <LinkButton href='https://x.com/FlynnStevens30' text='Twitter' />
          </ul>
        </header>
      </main>
    </>
  )
}
