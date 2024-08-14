import LinkButton from '../../components/link-button'

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
      <div className='grid grid-cols-2 justify-center'>
        <h1 className='col-start-2'>{title}</h1>
        <h2 className=' text-gray-400 col-start-2'>{description}</h2>
        <div className='col-start-1 p-0'>
          <div className='w-24 h-24 bg-gray-200 dark:bg-gray-800 rounded-full' />
        </div>
      </div>
      <ul className='flex flex-col justify-evenly md:flex-row md:items-stretch p-4 space-y-2 md:space-y-0 md:space-x-4'>
        <LinkButton href={repo} text='GitHub' />
        <LinkButton href={href} text='View Project' />
      </ul>
      <ul className='flex flex-wrap justify-center p-4'>
        {tech.map(t => (
          <li
            key={t}
            className='m-1 px-4 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-gray-400 text-sm'
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
