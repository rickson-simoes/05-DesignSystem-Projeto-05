import { styled } from '../../styles'

export const TooltipContainer = styled('div', {
  backgroundColor: '$gray900',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',

  padding: '$3 $4',
  borderRadius: '$sm',

  display: 'inline',
  position: 'relative',

  '&::after': {
    position: 'absolute',
    content: '',
    borderLeft: '$space$2 solid transparent',
    borderRight: '$space$2 solid transparent',
    borderTop: '$space$2 solid $gray900',

    bottom: '-$2',
    left: '50%',
    transform: 'translate(-50%)',
    marginTop: 15,
  },

  // '&::before': {
  //   content: 'asdasdasds',
  //   position: 'absolute',
  //   bottom: '100%',
  //   left: '50%',
  //   transform: 'translate(-50%)',
  //   marginBottom: 15,
  //   color: '$white',
  //   background: 'rgba(0,0,0, .7)',
  //   borderRadius: 5,
  //   padding: 5,
  // },

  // '&::after': {
  //   position: 'absolute',
  //   content: 'asdasdasd',
  //   width: 0,
  //   height: 0,
  //   borderLeft: '5px solid transparent',
  //   borderRight: '5px solid transparent',
  //   borderTop: '7px solid rgba(0,0,0, .7)',
  // },
})
