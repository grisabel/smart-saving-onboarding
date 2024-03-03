import type { Meta, StoryObj } from "@storybook/react";

import Validator from "./Validator";

const meta = {
  title: "SmartSavings/atoms/Validator/BaseValidator",
  component: Validator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Validator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ValidatorExample: Story = {
  args: {
    rules: [
      { status: null, description: "Regla1" },
      { status: true, description: "Regla2" },
      { status: false, description: "Regla3" },
    ],
  },
};
