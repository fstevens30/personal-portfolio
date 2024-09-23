import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter
} from './ui/card'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import { formatDateMonthYear } from '@/lib/utils'

interface ProjectProps {
  title: string
  description: string
  href?: string
  repo: string
  tech: string[]
  image: string
  date: string
}

export function ProjectItem ({
  title,
  description,
  href,
  repo,
  tech,
  image,
  date
}: ProjectProps) {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between items-center'>
          <CardTitle>{title}</CardTitle>
          <div>{formatDateMonthYear(date)}</div>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <div className='flex justify-center p-4'>
        <Image
          src={image}
          alt={title}
          width={800}
          height={400}
          className='rounded-md'
        />
      </div>
      <div className='px-4'>
        <p className='text-muted-foreground'>{tech.join(', ')}</p>
      </div>
      <CardFooter className='flex justify-between p-4'>
        {href && (
          <Link href={href} passHref rel='noopener noreferrer' target='_blank'>
            <Button>View Project</Button>
          </Link>
        )}
        <Link href={repo} passHref rel='noopener noreferrer' target='_blank'>
          <Button variant={'secondary'}>Source Code</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
