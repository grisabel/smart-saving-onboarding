import type { Meta, StoryObj } from "@storybook/react";

import LineStep from "./LineStep";

const meta = {
  title: "SmartSavings/LineStep",
  component: LineStep,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LineStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LineStepExample: Story = {
  args: {
    label: "LineStep",
  },
};
