import type { Meta, StoryObj } from "@storybook/react";

import Alert from "./Alert";

const meta = {
  title: "SmartSavings/atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AlertDarger: Story = {
  args: {
    title: "Title Darger",
    description: "Description Danger",
    type: "danger",
  },
};

export const AlertWarning: Story = {
  args: {
    title: "Title Warning",
    description: "Description Warning",
    type: "warning",
  },
};
