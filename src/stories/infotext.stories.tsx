import React from 'react';

import {Meta, StoryObj} from '@storybook/react';

import InfoText from '../components/Info';
import { MdWarning } from 'react-icons/md';

const meta: Meta<typeof InfoText> = {
    title: 'Components/InfoText',
    component: InfoText,
}

export default meta;

type Story = StoryObj<typeof InfoText>;

export const Warnings: Story = {
  args: {
    code: 'const x = 1;',
    heading: 'Warning',
    content: 'lorem30',
    svg: <MdWarning/>,
  }
};