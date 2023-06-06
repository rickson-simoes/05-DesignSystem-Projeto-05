import { Meta, StoryObj } from '@storybook/react'
import { Tooltip, TooltipProps } from '@kenaifire-ui/react'

export default {
  title: 'Surfaces/Tooltip',
  component: Tooltip,
  argTypes: {
    isAvailable: {
      options: ['Available', 'Unavailable'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    content: 'October 28th',
    isAvailable: 'Available',
  },
}
