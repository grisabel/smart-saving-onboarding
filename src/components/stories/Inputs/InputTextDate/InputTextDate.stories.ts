import type { Meta, StoryObj } from "@storybook/react";

import InputTextDate from "./InputTextDate";

const meta = {
  title: "SmartSavings/Inputs/InputTextDate",
  component: InputTextDate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputTextDate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTextEmailExample: Story = {
  args: {
    label: "label",
  },
};
