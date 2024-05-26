import React from "react";

import { InputNumberProps } from "./InputNumber.types";
import InputBase from "../InputBase";
import { useMaskito } from "@maskito/react";
import { integerMask } from "./mask/integer.mask";
import { decimalMask } from "./mask/decimal.mask";

const InputNumber: React.FC<InputNumberProps> = ({
  type = "decimal",
  ...props
}) => {
  const inputRef = useMaskito({
    options: type === "decimal" ? decimalMask : integerMask,
  });

  return <InputBase inputRef={inputRef} {...props} type="text" />;
};

export default InputNumber;
