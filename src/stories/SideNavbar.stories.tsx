import {Meta, StoryObj} from '@storybook/react';
import { SideNavbar } from '../Utils';

const meta: Meta<typeof SideNavbar> = {
    title: 'Utils/SideNavbar',
    component: SideNavbar,
}

export default meta;

type Story = StoryObj<typeof SideNavbar>;

export const BasicNav: Story = {
  args: {
    logo: 'Warning',
  }
};

