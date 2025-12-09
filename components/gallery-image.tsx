import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

interface GalleryImageProps {
  alt: string
  description: string
  src: string
  width: number
  height: number
}

export default function GalleryImage ({
  alt,
  description,
  src,
  width,
  height
}: GalleryImageProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span className='sr-only'>{alt}</span>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            className='rounded-md w-full h-full object-cover group-hover:scale-105 transition-transform duration-300'
          />
        </TooltipTrigger>
        <TooltipContent>
          <span>{description}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
