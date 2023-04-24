import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

type StoryButton = StoryObj<ButtonProps>
type MetaButton = Meta<ButtonProps>

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as MetaButton

export const Primary: StoryButton = {}

export const Big: StoryButton = {
  args: {
    size: 'big',
  },
}
