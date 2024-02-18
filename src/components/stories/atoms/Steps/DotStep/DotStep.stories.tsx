import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import DotStep from "./DotStep";
import Icon from "@/components/stories/atoms/Icon";

const meta = {
  title: "SmartSavings/atoms/Steps/DotStep",
  component: DotStep,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof DotStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DotStepExample: Story = {
  render: (args) => {
    return (
      <div style={{ height: "350px" }}>
        <DotStep {...args} />
      </div>
    );
  },
  args: {
    steps: [
      { isTransited: true },
      { isTransited: false },
      { isTransited: false },
      { isTransited: false, hasError: true },
    ],
  },
};
