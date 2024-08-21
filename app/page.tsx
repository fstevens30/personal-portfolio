import DegreeProgressBar from '@/components/degree-progress-bar'
import TechIcon from '@/components/tech-icon'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/config/site'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export default function Home () {
  return (
    <section className='space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32'>
      <div className='container flex flex-col gap-4 text-center pb-10'>
        <h1 className='text-xl sm:text:2xl md:text-3xl lg:text-4xl font-black text-balance'>
          Hey, I&apos;m Flynn
        </h1>
        <p className='max-p-[42rem] mx-auto text-muted-foreground sm:text-lg text-balance'>
          I&apos;m a Software Development student based in Christchurch, New
          Zealand.
        </p>
        <div className='flex justify-center gap-4'>
          <Link
            href={siteConfig.links.github}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='outline'>
              GitHub
              <ArrowUpRight className='ml-2 h-4 w-4 text-muted-foreground' />
            </Button>
          </Link>
          <Link
            href={siteConfig.links.twitter}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='outline'>
              Twitter
              <ArrowUpRight className='ml-2 h-4 w-4 text-muted-foreground' />
            </Button>
          </Link>
          <Link
            href={siteConfig.links.linkedin}
            target='_blank'
            rel='noopener noreferrer'
          >
            <Button variant='outline'>
              LinkedIn
              <ArrowUpRight className='ml-2 h-4 w-4 text-muted-foreground' />
            </Button>
          </Link>
        </div>
        <div className='flex flex-col justify-center mt-[16rem]'>
          <h1 className='text-lg'>Study</h1>
          <p className='w-full max-w-[42rem] mx-auto text-muted-foreground'>
            I am studying Bachelor of Information Technology at Ara Institute of
            Canterbury. Below is my progress towards the degree.
          </p>
          <div className='flex justify-center mt-4 p-4'>
            <DegreeProgressBar currentCredits={225} />
          </div>
        </div>
        <div className='flex flex-col justify-center mt-8'>
          <h1 className='text-lg'>Tech</h1>
          <p className='w-full max-w-[42rem] mx-auto text-muted-foreground'>
            Some of the technologies I have experience with and enjoy working
            with.
          </p>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 mt-2 justify-center'>
            {siteConfig.tech.map(tech => (
              <div key={tech} className='flex justify-center items-center p-4'>
                <TechIcon name={tech} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
