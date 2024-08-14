import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Flynn Stevens',
  description: 'A little more about me.'
}

export default function About () {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center p-24'>
        <header className='p-4'>
          <h1>About Me</h1>
        </header>
        {/* Bento style grid */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-8'>
          <div className='shadow-sm rounded-lg border p-4 border-gray-200 dark:border-gray-600'>
            <h2 className='text-xl font-semibold p-2'>Education</h2>
            <p className='p-2'>
              I am a student at Ara Institute of Canterbury, studying a Bachelor
              of Information and Communication Technologies. I am in my second
              year and am on track to graduate in late 2025.
            </p>
            <p className='p-2'>
              I have previously studied at the Nelson Marlborough Institute of
              Technology where I gained my Diploma in Web Design and
              Development.
            </p>
          </div>
          <div className='shadow-sm rounded-lg border p-4 border-gray-200 dark:border-gray-600 lg:col-span-2'>
            <h2 className='text-xl font-semibold p-2'>Hobbies</h2>
            <p className='p-2'>
              I am currently working as a software developer at a local
              Christchurch company, where I am working on a variety of projects
              in a team environment.
            </p>
            <p className='p-2'>
              I have previously worked as a freelance web developer, where I
              built websites for small businesses and individuals.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
