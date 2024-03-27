import React from "react";

import { InputAmountProps } from "./InputAmount.types";
import InputBase from "../InputBase";
import { amountMask } from "./mask/amount.mask";
import { useMaskito } from "@maskito/react";
import Icon from "../../Icon";

const InputAmount: React.FC<InputAmountProps> = (props) => {
  const inputRef = useMaskito({
    options: amountMask,
  });

  return (
    <InputBase
      inputRef={inputRef}
      {...props}
      type="text"
      icon={<Icon name="euro" />}
    />
  );
};

export default InputAmount;
