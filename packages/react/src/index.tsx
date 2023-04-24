import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  borderRadius: '$sm',
  padding: '$2 $4',
  border: 0,
  fontWeight: 'bold',
  color: '$white',

  variants: {
    size: {
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
      big: {
        fontSize: 16,
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>

//#region Forma manual do typescript de utilizar os componentes declarados no variant sem o uso do ComponentProps do react
//type ButtonType = typeof Button

//// FORMA 1
// export interface ButtonProps extends ButtonType {
//   size: 'big' | 'small'
// }

//// FORMA 2
// export type ButtonProps = ButtonType & {
//   size: 'big' | 'small'
// }
//#endregion
