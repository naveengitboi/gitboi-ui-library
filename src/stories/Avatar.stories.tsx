import {Meta, StoryObj} from '@storybook/react'
import React from 'react'

import { Avatar } from '../components'


const meta:Meta<typeof Avatar> = {

    title: 'Components/Avatar',
    component: Avatar,

}

export default meta;

type Story = StoryObj<typeof Avatar>;

export const avatar: Story = {
    args: {
        w: '50px',
        h: '50px',
        bSize: 5,
        borderColor: 'white',
        bRadius: '50%',
    }
};
