import React from "react";

import { InputTextProps } from "./InputText.types";
import InputBase from "../InputBase";

const InputText: React.FC<InputTextProps> = (props) => {
  return <InputBase {...props} type="text" />;
};

export default InputText;
