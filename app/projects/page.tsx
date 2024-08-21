import { ProjectItem } from '@/components/project-item'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Flynn Stevens',
  description: 'Take a look at some of the projects I have worked on.'
}

const projects = [
  {
    title: 'Kiwi Huts',
    description: 'Built with SwiftUI, explore DOC huts in New Zealand.',
    href: 'https://apps.apple.com/nz/app/kiwi-huts/id6502030661',
    repo: 'https://github.com/fstevens30/Kiwi-Huts',
    tech: ['SwiftUI', 'Swift', 'Firebase', 'Python'],
    image: '/images/kiwi-huts.png',
    date: '2024-06-09'
  },
  {
    title: 'NZ Healthcare',
    description: 'Fictional healthcare provider portal, made with Django.',
    href: 'https://fstevens30.pythonanywhere.com/',
    repo: 'https://github.com/fstevens30/NZHealthcare',
    tech: ['Django', 'Python', 'HTML', 'CSS', 'mySQL'],
    image: '/images/nz-healthcare.png',
    date: '2023-11-30'
  },
  {
    title: 'Personal Portfolio',
    description: 'This website, a showcase of my work and an online resume.',
    href: 'https://flynn-stevens.com/',
    repo: 'https://github.com/fstevens30/personal-portfolio',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Shadcn UI'],
    image: '/images/placeholder.webp',
    date: '2024-08-21'
  }
]

projects.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export default function Projects () {
  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 '>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            Projects
          </h1>
          <p className='text-xl text-muted-foreground'>
            Take a look at some of the projects I have worked on.
          </p>
        </div>
      </div>
      <hr className='mt-8' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 md:p-8'>
        {projects.map(project => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
    </div>
  )
}
