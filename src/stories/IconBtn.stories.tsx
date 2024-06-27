import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Md16Mp } from 'react-icons/md';

import { BtnIcon } from '../components';
const meta: Meta<typeof BtnIcon> = {
    title: 'Components/ButtonIcon',
    component: BtnIcon,
}

export default meta;

type Story = StoryObj<typeof BtnIcon>;

export const IconBtn: Story = {
  args: {
    children: <Md16Mp />,
  }
};