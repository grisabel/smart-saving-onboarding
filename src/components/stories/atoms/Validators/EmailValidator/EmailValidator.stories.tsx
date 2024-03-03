import type { Meta, StoryObj } from "@storybook/react";

import EmailValidator from "./EmailValidator";

const meta = {
  title: "SmartSavings/atoms/Validator/EmailValidator",
  component: EmailValidator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof EmailValidator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailValidatorExample: Story = {
  args: {
    email: true,
    emailRepeat: false,
  },
};
