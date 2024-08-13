import Nav from '../components/nav'
import Project from './project'

export default function About () {
  return (
    <>
      <Nav />
      <main className='flex min-h-screen flex-col items-center p-24'>
        <header className='shadow-sm rounded-lg border p-4 border-gray-200 dark:border-gray-600'>
          <h1 className='text-2xl p-2 font-semibold'>Projects</h1>
          <h2 className='p-2 text-gray-400'>
            A collection of projects I have worked on.
          </h2>
        </header>

        {/* Project components */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
          <Project
            title='Kiwi Huts'
            description='Built with SwiftUI, explore DOC huts in New Zealand.'
            href='https://apps.apple.com/nz/app/kiwi-huts/id6502030661'
            repo='https://github.com/fstevens30/Kiwi-Huts'
            tech={['SwiftUI', 'Swift', 'Python']}
          />
        </div>
      </main>
    </>
  )
}
