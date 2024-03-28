import React from "react";

import { InputAmountProps } from "./InputAmount.types";
import InputBase from "../InputBase";
import { amountMask } from "./mask/amount.mask";
import { useMaskito } from "@maskito/react";
import Icon from "../../Icon";

const InputAmount: React.FC<InputAmountProps> = ({
  value,
  onChange = () => null,
  ...props
}) => {
  const inputRef = useMaskito({
    options: amountMask,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.value) {
      return event;
    }

    const formattedValue = event.target.value;
    let numericValue = formattedValue.replace(/\€|\s/g, "");

    numericValue = numericValue.replace(/\./g, "");
    numericValue = numericValue.replace(/,/g, ".");

    const number = parseFloat(numericValue);

    onChange({
      target: { value: number },
    } as unknown as React.ChangeEvent<HTMLInputElement>);
  };

  const formatCurrency = (value: string) => {
    const f = new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 2,
    });

    return `${f.format(parseFloat(value)).replace(/\€|\s/g, "")}`;
  };

  return (
    <InputBase
      inputRef={inputRef}
      value={value ? formatCurrency(value) : null}
      onChange={handleChange}
      {...props}
      type="text"
      icon={<Icon name="euro" />}
    />
  );
};

export default InputAmount;
