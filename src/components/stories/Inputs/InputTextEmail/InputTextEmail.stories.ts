import type { Meta, StoryObj } from "@storybook/react";

import InputTextEmail from "./InputTextEmail";

const meta = {
  title: "SmartSavings/InputTextEmail",
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
    extraClassName: "email",
    label: "Label Email",
    placeholder: "Placeholder Email",
  },
};
