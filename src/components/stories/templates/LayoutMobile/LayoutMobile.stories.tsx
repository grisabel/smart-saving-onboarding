import type { Meta, StoryObj } from "@storybook/react";

import LayoutMobile from "./LayoutMobile";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";

const meta = {
  title: "SmartSavings/templates/LayoutMobile",
  component: LayoutMobile,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LayoutMobile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutMobileExample: Story = {
  render: (args) => {
    return (
      <div
        style={{ height: "500px", width: "320px", border: "1px solid gray" }}
      >
        <LayoutMobile {...args} />
      </div>
    );
  },
  args: {
    children: (
      <>
        <h1>TITLE</h1>
      </>
    ),
  },
};
