
import {Meta, StoryObj} from '@storybook/react';

import Navbar from '../Utils/Navbar';

const meta: Meta<typeof Navbar> = {
    title: 'Utils/Navbar',
    component: Navbar,
}

export default meta;

type Story = StoryObj<typeof Navbar>;

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