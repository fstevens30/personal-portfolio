'use client'

import { useState } from 'react'
import { Progress } from './ui/progress'

interface DegreeProgressBarProps {
  currentCredits: number
}

export default function DegreeProgressBar ({
  currentCredits
}: DegreeProgressBarProps) {
  const totalCredits = 360
  const progress = (currentCredits / totalCredits) * 100

  const [tooltip, setTooltip] = useState('')

  const handleMouseEnter = () => {
    setTooltip(progress.toFixed(2) + '%')
  }

  const handleMouseLeave = () => {
    setTooltip('')
  }

  return (
    <div className='relative w-full max-w-[42rem] mx-auto'>
      <Progress
        value={progress}
        max={100}
        className='w-full'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {tooltip && (
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 p-1 bg-gray-700 text-white text-sm rounded'>
          {tooltip}
        </div>
      )}
    </div>
  )
}
