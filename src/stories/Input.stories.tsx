import { Meta, StoryObj } from "@storybook/react/*";

import { Input } from "../Inputs";

import React from "react";

const meta: Meta<typeof Input> = {
    title: "Inputs/Input",
    component: Input,

}

export default meta

type Story = StoryObj<typeof Input>;

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