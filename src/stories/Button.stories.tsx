import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Md16Mp } from 'react-icons/md';

import Button from '../components/Button';

const meta: Meta<typeof Button> = {
    title: 'Components/Button',
    component: Button,
}
export default meta;
type Story = StoryObj<typeof Button>;


export const BasicBtn: Story = {
  args: {
    children: "Hello au lu",
    startIcon: <Md16Mp />,
    onClickEvent:() => console.log('Hello world'),
    variant: "contained",
    svgSize: "30px",
    svgColor: "#ffbfbf"
  }
};

export const IconButton: Story = {
  args: {
    variant: 'contained',
    startIcon: <Md16Mp />,
    bRadius: '50%',
    svgSize: "50px",
    svgColor:"#fff2f2",
    w: "100px",
    h: "100px"
  }
};

