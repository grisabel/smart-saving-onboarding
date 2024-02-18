import React, { useState } from "react";
import Image from "next/image";
import { InputTextPasswordProps } from "./InputTextPassword.types";
import InputBase from "../InputBase";
import Icon from "../../Icon";

const InputTextPassword: React.FC<InputTextPasswordProps> = (props) => {
  const [hide, setHide] = useState<boolean>(true);

  const handleHide = () => {
    setHide((preState) => !preState);
  };

  return (
    <InputBase
      {...props}
      type={hide ? "password" : "text"}
      icon={
        <span onClick={handleHide}>
          {hide ? <Icon name="eye-open" /> : <Icon name="eye-close" />}
        </span>
      }
    />
  );
};

export default InputTextPassword;
