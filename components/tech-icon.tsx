'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'
import { siteConfig, TechKeys } from '../config/site' // Import siteConfig and TechKeys

export default function TechIcon ({ name }: { name: TechKeys }) {
  // Use TechKeys type for name
  const [src, setSrc] = useState(
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`
  )

  // Get the descriptive name from the tech dictionary
  const descriptiveName = siteConfig.tech[name] || name

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span className='sr-only'>{descriptiveName}</span>
          <Image
            src={src}
            width={75}
            height={75}
            alt={descriptiveName}
            onError={() =>
              setSrc(
                `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-plain.svg`
              )
            }
          />
        </TooltipTrigger>
        <TooltipContent>
          <span>{descriptiveName}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
