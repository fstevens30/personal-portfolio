'use client'

import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'
import { siteConfig, TechKeys } from '../config/site'

export default function TechIcon ({ name }: { name: TechKeys }) {
  // Get the descriptive name from the tech dictionary
  const descriptiveName = siteConfig.tech[name] || name

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span className='sr-only'>{descriptiveName}</span>
          <Image
            src={`/images/tech/${name}.svg`}
            width={75}
            height={75}
            alt={descriptiveName}
          />
        </TooltipTrigger>
        <TooltipContent>
          <span>{descriptiveName}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
