import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Flynn Stevens',
  description: 'A little more about me.'
}

export default function About () {
  return (
    <div className='container max-w-4xl py-6 lg:py-10'>
      <div className='flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8 '>
        <div className='flex-1 space-y-4'>
          <h1 className='inline-block font-black text-4xl lg:text-5xl'>
            About
          </h1>
          <p className='text-xl text-muted-foreground'>
            In case you find me really interesting.
          </p>
        </div>
      </div>
      <hr className='mt-8' />
    </div>
  )
}
