import { ComponentProps, ElementRef, forwardRef } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export interface TextInputProps extends ComponentProps<typeof Input> {
  prefix?: string
  sizeOf?: ComponentProps<typeof TextInputContainer>['sizeOf']
}

export const TextInput = forwardRef<ElementRef<typeof Input>, TextInputProps>(
  ({ prefix, sizeOf, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer sizeOf={sizeOf}>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

// Alterando o nome dos componentes dentro do storybook para o nome desejado
TextInput.displayName = 'TextInput'
