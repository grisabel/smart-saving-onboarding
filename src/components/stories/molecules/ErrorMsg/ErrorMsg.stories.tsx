import type { Meta, StoryObj } from "@storybook/react";

import ErrorMsg from "./ErrorMsg";

const meta = {
  title: "SmartSavings/molecules/ErrorMsg",
  component: ErrorMsg,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ErrorMsg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ErrorMsgExample: Story = {
  args: {
    title: "title",
    content: <p>content</p>,
    button: { label: "label button", onClick: () => null },
  },
};

export const ErrorMsgExampleDefault: Story = {
  args: {},
};
