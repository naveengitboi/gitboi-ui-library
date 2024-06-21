import type { Meta, StoryObj } from '@storybook/react';

import CodeBlock from '../components/CodeBlock';

const meta: Meta<typeof CodeBlock> = {
    title: 'Components/CodeBlock',
    component: CodeBlock,
}

export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const CodeBlockStory: Story = {
  args: {
    children: 'const x = 5;',
    fontFamily: 'monospace',
  }
};