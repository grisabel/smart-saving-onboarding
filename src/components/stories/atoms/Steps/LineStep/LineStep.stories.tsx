import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import LineStep from "./LineStep";
import Icon from "@/components/stories/atoms/Icon";

const meta = {
  title: "SmartSavings/atoms/Steps/LineStep",
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
      { icon: <Icon name="question" /> },
      { icon: <Icon name="email-send" /> },
      { isTransited: false, hasError: true, icon: <Icon name="lock" /> },
    ],
  },
};
