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
    options: [
      { value: "a", label: "Internet Explorer" },
      { value: "b", label: "Explorer" },
      { value: "c", label: "Internet" },
    ],
    onChange: action("onChange"),
  },
};

export const DropdownDefaultValueExample: Story = {
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
    value: "b",
    options: [
      { value: "a", label: "Internet Explorer" },
      { value: "b", label: "Explorer" },
      { value: "c", label: "Internet" },
    ],
    onChange: action("onChange"),
  },
};
