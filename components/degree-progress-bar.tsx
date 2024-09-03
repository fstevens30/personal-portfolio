import { Progress } from './ui/progress'

interface DegreeProgressBarProps {
  currentCredits: number
}

export default function DegreeProgressBar ({
  currentCredits
}: DegreeProgressBarProps) {
  const totalCredits = 360
  const progress = (currentCredits / totalCredits) * 100

  return (
    <div className='relative w-full max-w-[42rem] mx-auto flex flex-col'>
      <Progress value={progress} max={100} className='w-full' />
      <p className='text-muted-foreground text-sm justify-center p-4'>
        <b>{currentCredits}</b>/{totalCredits} Credits
      </p>
    </div>
  )
}
