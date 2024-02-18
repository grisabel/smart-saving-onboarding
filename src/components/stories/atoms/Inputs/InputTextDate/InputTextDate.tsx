import React from "react";
import { maskitoDateOptionsGenerator } from "@maskito/kit";
import { useMaskito } from "@maskito/react";

import { InputTextDateProps } from "./InputTextDate.types";
import InputBase from "../InputBase";
import Icon from "../../Icon";

const options = maskitoDateOptionsGenerator({
  mode: "dd/mm/yyyy",
  separator: "/",
});

const InputTextDate: React.FC<InputTextDateProps> = (props) => {
  const inputRef = useMaskito({ options });

  return (
    <InputBase
      id="inputTextDate"
      placeholder="dd/mm/yyyy"
      inputRef={inputRef}
      {...props}
      type="text"
      icon={<Icon name="calendar" />}
    />
  );
};

export default InputTextDate;
