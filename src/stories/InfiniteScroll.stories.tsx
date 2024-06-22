import {Meta, StoryObj} from '@storybook/react';

import { InfiniteScroller } from '../Utils';

import React from 'react';

const meta:Meta<typeof InfiniteScroller> = {
    title: 'Utils/InfiniteScroller',
    component: InfiniteScroller,
}

export default meta;

type Story = StoryObj<typeof InfiniteScroller>;

export const InfiniteScroll: Story = {
    args: {
        
    }
};