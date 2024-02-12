import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
  title: "SmartSavings/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextBold: Story = {
  args: {
    text: "Bold Text",
    weight: "bold",
  },
};

export const TextRegular: Story = {
  args: {
    text: "Regular Text",
    weight: "regular",
  },
};

export const TextThin: Story = {
  args: {
    text: "Thin Text",
    weight: "thin",
  },
};
