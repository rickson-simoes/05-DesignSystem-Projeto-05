import { styled } from '../../styles'

export const ToastContainer = styled('div', {
  padding: '$3 $5',
  borderRadius: '$sm',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  width: '$80',

  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',

  'span, svg': {
    color: '$gray200',
  },

  span: {
    fontSize: '$sm',
  },

  svg: {
    cursor: 'pointer',
  },
})

export const ToastTopContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  marginBottom: '$1',
})

export const ToastCloseButton = styled('button', {
  all: 'unset',
})
