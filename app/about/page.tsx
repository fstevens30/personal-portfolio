import { Metadata } from 'next'
import GalleryImage from '@/components/gallery-image'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Translator from '@/components/translator'

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

      <div className='flex-col justify-between my-4 items-center'>
        <p>
          I have a passion for programming and really enjoy the problem-solving
          aspect and seeing my solutions come to life. When I&apos;m not
          studying, I enjoy being out in nature, cooking or hanging with my cat,
          Zena. I also enjoy working out and have recently taken up pilates.
        </p>
      </div>

      <div className='flex-col justify-between my-8 items-center'>
        <p>
          I was born and raised down south in{' '}
          <Translator english='Invercargill' maori='Waihōpai' />. At 18 I moved
          north to sunny <Translator english='Nelson' maori='Whakatū' /> for a
          fresh start. I began studying at Nelson Marlborough Institute of
          Technology and earned my Diploma in Web Design and Developemt. From
          there I moved to{' '}
          <Translator english='Christchurch' maori='Ōtautahi' /> with my partner
          to continue study in order to earn my Bachelor of Information
          Technology.
        </p>
      </div>

      <div className='flex-col justify-between my-8 items-center'>
        <p>
          I have a passion for sustainability and a community-driven approach to
          life. I have a strong interest in urban planning and transport in
          particular. I want to be able to leverage my IT skills in order to
          create solutions that provide a positive impact on the environment and
          society.
        </p>
      </div>
      <Carousel className='w-full max-w-3xl mx-auto my-12'>
        <CarouselContent>
          <CarouselItem>
            <Card className='p-8 flex justify-center items-center'>
              <GalleryImage
                alt='Ōtautahi'
                description='Ōtautahi'
                src='/images/chch.jpg'
                width={600}
                height={400}
              />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className='p-8 flex justify-center items-center'>
              <GalleryImage
                alt='Zena the cat'
                description='Zena the cat.'
                src='/images/zena.jpg'
                width={400}
                height={600}
              />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className='p-8 flex justify-center items-center'>
              <GalleryImage
                alt='Invercargill'
                description='Ōreti beach, Waihōpai'
                src='/images/invers.jpg'
                width={400}
                height={600}
              />
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card className='p-8 flex justify-center items-center'>
              <GalleryImage
                alt='Nelson'
                description='Nelson'
                src='/images/nelson.jpg'
                width={600}
                height={400}
              />
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm' />
        <CarouselNext className='absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm' />
      </Carousel>
    </div>
  )
}
