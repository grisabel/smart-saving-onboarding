import type { Meta, StoryObj } from "@storybook/react";

import InputBase from "./InputBase";

const meta = {
  title: "SmartSavings/InputBase",
  component: InputBase,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputBase>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputBaseExample: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
  },
};
