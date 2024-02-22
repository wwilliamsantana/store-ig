import { ReactNode } from 'react'
import { OptionItem } from './styled'

interface OptionItemsProps {
  children: ReactNode
  text: string
  color: 'yellow' | 'grey' | 'yellowLight' | 'purple'
}

export function OptionIntroItems({ children, text, color }: OptionItemsProps) {
  return (
    <OptionItem color={color}>
      <div>{children}</div>
      <span>{text}</span>
    </OptionItem>
  )
}
