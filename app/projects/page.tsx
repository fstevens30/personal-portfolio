import Project from './project'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Flynn Stevens',
  description: 'A collection of projects I have worked on.'
}

export default function About () {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center p-24'>
        <header>
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

          <Project
            title='NZHealthcare'
            description='Fictional healthcare provider portal, made with Django.'
            href='https://fstevens30.pythonanywhere.com/'
            repo='https://github.com/fstevens30/NZHealthcare'
            tech={['Django', 'Python']}
          />

          <Project
            title='Personal Portfolio'
            description='This site, my personal portfolio, made with Next.js'
            href='#'
            repo='https://github.com/fstevens30/'
            tech={['Next.js', 'Tailwind CSS']}
          />
        </div>
      </main>
    </>
  )
}
