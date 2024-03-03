import type { Meta, StoryObj } from "@storybook/react";

import PasswordValidator from "./PasswordValidator";

const meta = {
  title: "SmartSavings/atoms/PasswordValidator",
  component: PasswordValidator,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordValidator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PasswordValidatorExample: Story = {
  args: {
    title: "title",
    content: <p>content</p>,
    button: { label: "label button", onClick: () => null },
  },
};
