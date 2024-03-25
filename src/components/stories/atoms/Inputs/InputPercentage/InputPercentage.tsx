import React from "react";

import { InputPercentageProps } from "./InputPercentage.types";
import InputBase from "../InputBase";
import { percentageMask } from "./mask/percentage.mask";
import { useMaskito } from "@maskito/react";
import Icon from "../../Icon";

const InputPercentage: React.FC<InputPercentageProps> = (props) => {
  const inputRef = useMaskito({
    options: percentageMask,
  });

  return (
    <InputBase
      inputRef={inputRef}
      {...props}
      type="text"
      icon={<Icon name="percentage" />}
    />
  );
};

export default InputPercentage;
