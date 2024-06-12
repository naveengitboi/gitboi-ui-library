import React from 'react';

import {Meta, StoryObj} from '@storybook/react';

import InfoText from './InfoText';

const meta: Meta<typeof InfoText> = {
    title: 'Components/InfoText',
    component: InfoText,
}

export default meta;

type Story = StoryObj<typeof InfoText>;

export const Warnings: Story = {
  args: {
    code: 'const x = 1;',
    fontFamily: 'monospace',
  }
};