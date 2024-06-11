import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Md16Mp } from 'react-icons/md';
import { Button } from '../components';

const meta: Meta<typeof Button> = {
    component: Button,
}
export default meta;
type Story = StoryObj<typeof Button>;


export const BasicBtn: Story = {
  args: {
    children: "Hello au lu",
    startIcon: <Md16Mp />,
  }
};
