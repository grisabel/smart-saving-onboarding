import type { Meta, StoryObj } from "@storybook/react";

import InputTextEmail from "./InputTextEmail";

const meta = {
  title: "SmartSavings/atoms/Inputs/InputTextEmail",
  component: InputTextEmail,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputTextEmail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTextEmailExample: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
  },
};
