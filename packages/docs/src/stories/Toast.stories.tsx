import { Meta, StoryObj } from '@storybook/react'
import { Toast, ToastProps } from '@kenaifire-ui/react'

export default {
  title: 'Surfaces/Toast',
  component: Toast,
  args: {
    title: 'Appointment scheduled',
    subTitle: 'Wednesday, October 23th, 14:00pm',
  },
  argTypes: {
    onCloseButton: {
      action: 'Close', // Log the action
      description: 'Close toast',
    },
  },
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
