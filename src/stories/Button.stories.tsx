import {Meta, StoryObj} from '@storybook/react'

import {Button} from '../components'

const meta: Meta<typeof Button>={
    title:'Components/Button',
    component:Button,
}

export default meta;

type Story = StoryObj<typeof Button>;


export const Basic:Story = {
    args:{
        children:'Click me',
        varient:'contained'
    }
}