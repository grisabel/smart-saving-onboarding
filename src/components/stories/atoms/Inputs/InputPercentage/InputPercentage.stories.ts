import type { Meta, StoryObj } from "@storybook/react";

import InputPercentage from "./InputPercentage";

const meta = {
  title: "SmartSavings/atoms/Inputs/InputPercentage",
  component: InputPercentage,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputPercentage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputPecentageExample: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
  },
};
