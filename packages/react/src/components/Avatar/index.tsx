import { User } from 'phosphor-react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { ComponentProps } from 'react'

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

// Alterando o nome dos componentes dentro do storybook para o nome desejado
Avatar.displayName = 'Avatar'
