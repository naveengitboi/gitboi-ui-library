import { Meta, StoryObj } from "@storybook/react/*";

import { InputEle } from "../Inputs";

import React from "react";

const meta: Meta<typeof InputEle> = {
    title: "Inputs/Input",
    component: InputEle,

}

export default meta

type Story = StoryObj<typeof InputEle>;

export const input: Story = {
    args: {
        placeholder: "Type here",
        w: "200px",
        h: "30px",
        bSize: 1,
        bColor: "black",
        bRadius: "5px",
    }
}