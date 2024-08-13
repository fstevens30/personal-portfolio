import LinkButton from '../components/link-button'
import Image from 'next/image'

type ProjectProps = {
  title: string
  description: string
  href: string
  repo: string
  tech: string[]
}

export default function Project ({
  title,
  description,
  href,
  repo,
  tech
}: ProjectProps) {
  return (
    <div className='flex flex-col items-center shadow-sm rounded-lg border p-4 border-gray-200 dark:border-gray-600'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
        <h1 className='text-2xl p-2 font-semibold'>{title}</h1>
        <h2 className='p-2 text-gray-400'>{description}</h2>
      </div>
      <ul className='flex items-stretch p-4'>
        <LinkButton href={repo} text='GitHub' />
        <LinkButton href={href} text='View Project' />
      </ul>
      <ul className='flex flex-wrap justify-center p-4'>
        {tech.map(t => (
          <li
            key={t}
            className='m-2 px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded-full'
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
