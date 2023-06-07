import { TooltipContainer } from './style'

export function Tooltip({ content, isAvailable }: TooltipProps) {
  return (
    <TooltipContainer>
      {content} - {isAvailable}
    </TooltipContainer>
  )
}

export interface TooltipProps {
  content: string
  isAvailable: 'Available' | 'Unavailable'
}

Tooltip.displayName = 'Tooltip'
