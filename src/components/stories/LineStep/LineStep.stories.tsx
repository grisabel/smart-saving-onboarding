import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LineStep from "./LineStep";
import Icon from "@/components/stories/Icon";

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
  render: (args) => {
    return (
      <div style={{ height: "350px" }}>
        <LineStep {...args} />
      </div>
    );
  },
  args: {
    steps: [
      { hasError: false, icon: <Icon name="question" /> },
      { isWaiting: false, hasError: false, icon: <Icon name="email-send" /> },
      { isWaiting: true, hasError: true, icon: <Icon name="lock" /> },
    ],
  },
};
