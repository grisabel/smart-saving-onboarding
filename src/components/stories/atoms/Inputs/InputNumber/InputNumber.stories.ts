import type { Meta, StoryObj } from "@storybook/react";

import InputNumber from "./InputNumber";

const meta = {
  title: "SmartSavings/atoms/Inputs/InputNumber",
  component: InputNumber,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputNumber>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputNumberDecimal: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
    type: "decimal",
  },
};

export const InputNumberInteger: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
    type: "integer",
  },
};
