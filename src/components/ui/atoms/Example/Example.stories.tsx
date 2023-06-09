import type { Meta, StoryObj } from '@storybook/react'

import { Example } from './index'

const meta: Meta<typeof Example> = {
  title: 'YourComponent',
  component: Example,
  tags: ['autodocs']
}

type Story = StoryObj<typeof Example>

export const ExampleStory: Story = {}

export default meta
