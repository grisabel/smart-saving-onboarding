import type { Meta, StoryObj } from "@storybook/react";

import BlueButton from "./BlueButton";

const meta = {
  title: "Example/BlueButton",
  component: BlueButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BlueButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BlueButtonExample: Story = {
  args: {
    label: "Button",
  },
};
