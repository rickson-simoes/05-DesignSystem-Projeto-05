import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@kenaifire-ui/tokens'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: colors,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    fonts: fonts,
    lineHeights: lineHeights,
    radii: radii,
    space: space,
  },
  themeMap: {
    ...defaultThemeMap, // Quando colocamos a opção "SPACE", perdemos o autcomplete de dentro do padding, e etc, então precisamos colocar o defaultThemeMap, para que os outros não percam as opções quando for estilizar e precisar do autocomplete
    height: 'space',
    width: 'space',
  },
})
