import type { Meta, StoryObj } from '@storybook/react';

import CodeBlock from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
    title: 'Components/CodeBlock',
    component: CodeBlock,
}

export default meta;

type Story = StoryObj<typeof CodeBlock>;

export const CodeBlockStory: Story = {
  args: {
    code: 'const x = 1;',
  }
};