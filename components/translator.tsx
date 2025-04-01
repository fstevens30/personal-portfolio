import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './ui/tooltip'

interface TranslatorProps {
  english: string
  maori: string
}

export default function Translator ({ english, maori }: TranslatorProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <span className='sr-only'>{english}</span>
          <b>{maori}</b>
        </TooltipTrigger>
        <TooltipContent>
          <span>{english}</span>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
