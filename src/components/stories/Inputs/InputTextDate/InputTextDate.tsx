import React from "react";
import { InputTextDateProps } from "./InputTextDate.types";
import InputBase from "../InputBase";
import Icon from "../../Icon";

const InputTextDate: React.FC<InputTextDateProps> = (props) => {
  return (
    <InputBase
      placeholder="dd/mm/yyyy"
      {...props}
      type="email"
      icon={<Icon name="calendar" />}
    />
  );
};

export default InputTextDate;
