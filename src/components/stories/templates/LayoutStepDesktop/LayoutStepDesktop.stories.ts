import type { Meta, StoryObj } from "@storybook/react";

import LayoutStepDesktop from "./LayoutStepDesktop";

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
  args: {
    image: {
      src: "/images/retrievePassword/retrievePassword_1.svg",
      alt: "retrievePassword",
    },
  },
};
