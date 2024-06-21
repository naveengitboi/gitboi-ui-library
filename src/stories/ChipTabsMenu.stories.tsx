import React from 'react';

import {Meta, StoryObj} from '@storybook/react';

import ActiveTabMenu from '../Utils/Tabs/ActiveTabMenu';
const meta: Meta<typeof ActiveTabMenu> = {
    title: 'Utils/ActiveTabMenu',
    component: ActiveTabMenu,
}

export default meta;

type Story = StoryObj<typeof ActiveTabMenu>;

export const ActiveTabs: Story = {
  args: {
    
  }
};