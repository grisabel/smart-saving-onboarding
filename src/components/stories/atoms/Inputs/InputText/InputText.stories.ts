import type { Meta, StoryObj } from "@storybook/react";

import InputText from "./InputText";

const meta = {
  title: "SmartSavings/Inputs/InputText",
  component: InputText,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof InputText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputTextExample: Story = {
  args: {
    label: "label",
    placeholder: "placeholder",
  },
};
