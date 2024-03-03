import type { Meta, StoryObj } from "@storybook/react";

import Alert, { AlertProps } from "./Alert";
import { useState } from "react";

const meta = {
  title: "SmartSavings/atoms/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<AlertProps>;

const AlertImp = (props: any) => {
  const [open, setOpen] = useState(true);
  return <Alert {...props} open={open} setOpen={setOpen} />;
};

export const AlertDarger: Story = {
  render: (args) => {
    return <AlertImp {...args} />;
  },
  args: {
    title: "Title Darger",
    description: "Description Danger",
    type: "danger",
  },
};

export const AlertWarning: Story = {
  render: (args) => {
    return <AlertImp {...args} />;
  },
  args: {
    title: "Title Warning",
    description: "Description Warning",
    type: "warning",
  },
};
