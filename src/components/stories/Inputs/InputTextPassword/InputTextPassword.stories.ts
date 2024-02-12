import type { Meta, StoryObj } from "@storybook/react";

import InputTextPassword from "./InputTextPassword";

const meta = {
  title: "SmartSavings/InputTextPassword",
  component: InputTextPassword,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputTextPassword>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTextPasswordExample: Story = {
  args: {
    label: "Label Password",
    placeholder: "Placeholder Password",
  },
};
