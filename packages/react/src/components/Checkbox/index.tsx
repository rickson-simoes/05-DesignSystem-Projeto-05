import { Check } from 'phosphor-react'
import { ComponentProps } from 'react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

export interface CheckboxProps
  extends ComponentProps<typeof CheckboxContainer> {}

// Alterando o nome dos componentes dentro do storybook para o nome desejado
Checkbox.displayName = 'Checkbox'
