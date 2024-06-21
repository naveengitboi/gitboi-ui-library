
import {Meta, StoryObj} from '@storybook/react';

import { TopNavbar } from '../Utils';
const meta: Meta<typeof TopNavbar> = {
    title: 'Utils/TopNavbar',
    component: TopNavbar,
}

export default meta;

type Story = StoryObj<typeof TopNavbar>;

export const BasicNav: Story = {
  args: {
    logo: 'Warning',
  }
};

export const BgHover: Story = {
  args: {
    logo: 'Warning',
  }
};