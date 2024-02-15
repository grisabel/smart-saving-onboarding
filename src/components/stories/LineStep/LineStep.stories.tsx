import React from "react";
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
  render: (args) => {
    return (
      <div style={{ height: "350px" }}>
        <LineStep {...args} />
      </div>
    );
  },
  args: {
    steps: [
      { hasError: false, icon: <span>Step 1</span> },
      { isWaiting: false, hasError: false, icon: <span>Step 2</span> },
      { isWaiting: true, hasError: true, icon: <span>Step 3</span> },
    ],
  },
};
