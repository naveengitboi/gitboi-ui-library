import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Md16Mp } from 'react-icons/md';

import BtnError from './BtnIcon';

const meta: Meta<typeof BtnError> = {
    title: 'Components/ButtonIcon',
    component: BtnError,
}

export default meta;

type Story = StoryObj<typeof BtnError>;

export const IconBtn: Story = {
  args: {
    Icon: <Md16Mp />,
  }
};