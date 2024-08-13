import Nav from './components/nav'
import LinkButton from './components/link-button'

export default function Home () {
  return (
    <>
      <Nav />
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        <div>
          <h1 className='text-xl'>Kia Ora, I&apos;m Flynn</h1>
          <h2>Software Development Student</h2>

          <ul className='flex items-stretch p-2'>
            <LinkButton href='https://github.com/fstevens30' text='GitHub' />
            <LinkButton
              href='https://www.linkedin.com/in/fstevens30'
              text='LinkedIn'
            />
            <LinkButton href='https://x.com/FlynnStevens30' text='Twitter' />
          </ul>
        </div>
      </main>
    </>
  )
}
