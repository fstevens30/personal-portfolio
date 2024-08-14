import LinkButton from '../components/link-button'

export default function Home () {
  return (
    <>
      <main>
        <header className='p-4'>
          <h1>Hey, I&apos;m Flynn</h1>
          <h2>Software Development Student</h2>

          <ul className='flex items-stretch p-4'>
            <LinkButton href='https://github.com/fstevens30' text='GitHub' />
            <LinkButton
              href='https://www.linkedin.com/in/fstevens30'
              text='LinkedIn'
            />
            <LinkButton href='https://x.com/FlynnStevens30' text='Twitter' />
            <LinkButton
              href='https://www.youtube.com/@flynnstevens8211'
              text='YouTube'
            />
          </ul>
        </header>
      </main>
    </>
  )
}
