import React from "react";
import { InputTextEmailProps } from "./InputTextEmail.types";
import InputBase from "../InputBase";

const InputTextEmail: React.FC<InputTextEmailProps> = (props) => {
  return <InputBase {...props} type="email" />;
};

export default InputTextEmail;
