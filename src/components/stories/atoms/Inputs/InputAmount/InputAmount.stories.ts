import type { Meta, StoryObj } from "@storybook/react";

import InputAmount from "./InputAmount";

const meta = {
  title: "SmartSavings/atoms/Inputs/InputAmount",
  component: InputAmount,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputAmount>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputAmountExample: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
  },
};
