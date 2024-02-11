import type { Meta, StoryObj } from "@storybook/react";

import GreyButton from "./GreyButton";

const meta = {
  title: "Example/GreyButton",
  component: GreyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GreyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GreyButtonExample: Story = {
  args: {
    label: "Button",
  },
};
