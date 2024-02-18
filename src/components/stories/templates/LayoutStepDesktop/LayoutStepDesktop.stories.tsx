import type { Meta, StoryObj } from "@storybook/react";

import LayoutStepDesktop from "./LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";

const meta = {
  title: "SmartSavings/templates/LayoutStepDesktop",
  component: LayoutStepDesktop,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LayoutStepDesktop>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LayoutStepDesktopExample: Story = {
  render: (args) => {
    return (
      <div style={{ height: "500px" }}>
        <LayoutStepDesktop {...args} />
      </div>
    );
  },
  args: {
    image: {
      src: "/images/retrievePassword/retrievePassword_1.svg",
      alt: "retrievePassword",
    },
    step: (
      <LineStep
        steps={[
          { icon: <Icon name="question" />, isCompleted: true },
          { isTransited: false, icon: <Icon name="email-send" /> },
          { isTransited: false, icon: <Icon name="lock" /> },
        ]}
      ></LineStep>
    ),
  },
};
