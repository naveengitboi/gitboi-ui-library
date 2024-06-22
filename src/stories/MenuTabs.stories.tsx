import React from 'react';

import {Meta, StoryObj} from '@storybook/react';

import {NavbarMenu} from '../Utils'

const meta: Meta<typeof NavbarMenu> = {
    title: 'Utils/MenuTabs',
    component: NavbarMenu,
}

export default meta;

type Story = StoryObj<typeof NavbarMenu>;

export const Menu: Story = {
  args: {
    
  }
};