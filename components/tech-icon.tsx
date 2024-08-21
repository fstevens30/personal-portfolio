'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function TechIcon ({ name }: { name: string }) {
  const [src, setSrc] = useState(
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`
  )

  return (
    <div>
      <span className='sr-only'>{name}</span>
      <Image
        src={src}
        width={75}
        height={75}
        alt={name}
        onError={() =>
          setSrc(
            `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-plain.svg`
          )
        }
      />
    </div>
  )
}
