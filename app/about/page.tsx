import { Metadata } from 'next'
import GalleryImage from '@/components/gallery-image'

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

      <div className='flex justify-between my-4 items-center'>
        <p className='pr-4'>
          I have a passion for programming and really enjoy solving puzzles and
          seeing my solutions come to life. When I&apos;m not studying, I enjoy
          being out in nature, cooking or cuddling with my kitten Zena.
        </p>
        <GalleryImage
          src='/images/zena.jpg'
          alt='Zena'
          description='Zena'
          width={400}
          height={400}
        />
      </div>

      <div className='flex justify-between my-8 items-center'>
        <GalleryImage
          src='/images/invercargill.jpg'
          alt='Invercargill'
          description='Ōreti Beach - Invercargill'
          width={400}
          height={400}
        />
        <p className='pl-4'>
          I was born and raised down south in Invercargill, New Zealand. I love
          the beach there and also how close it is to some great hiking trails.
          I don&apos;t miss the cold weather and the howling wind.
        </p>
      </div>

      <div className='flex justify-between my-8 items-center'>
        <p className='pr-4'>
          I moved to Nelson when I was 19 in order to study Conservation.
          However I had to give up that dream due to health issues. I decided
          that a Web Development Diploma at NMIT interested me, and well, the
          rest is history.
        </p>
        <GalleryImage
          src='/images/nelson.jpg'
          alt='Nelson'
          description='Overlooking Nelson CBD'
          width={800}
          height={600}
        />
      </div>

      <div className='flex justify-between my-8 items-center'>
        <GalleryImage
          src='/images/christchurch.jpg'
          alt='Invercargill'
          description='View from my balcony in Christchurch'
          width={800}
          height={600}
        />
        <p className='pl-4'>
          After completing my diploma my partner and I moved to Christchurch for
          more opportunites for work and study. I am completing my bachelors at
          Ara Institute.
        </p>
      </div>
    </div>
  )
}
