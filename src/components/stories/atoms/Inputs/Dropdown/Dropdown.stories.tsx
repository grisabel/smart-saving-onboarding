import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Dropdown from "./Dropdown";

const meta = {
  title: "SmartSavings/atoms/Inputs/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DropdownExample: Story = {
  render: (args) => {
    return (
      <>
        <Dropdown {...args} />
        <p>hola</p>
      </>
    );
  },
  args: {
    id: "dropdown",
    label: "label",
    placeholder: "placeholder",
    onChange: action("onChange"),
  },
};
