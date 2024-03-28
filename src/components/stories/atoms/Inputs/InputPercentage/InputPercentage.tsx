import React from "react";

import { InputPercentageProps } from "./InputPercentage.types";
import InputBase from "../InputBase";
import { percentageMask } from "./mask/percentage.mask";
import { useMaskito } from "@maskito/react";
import Icon from "../../Icon";

const InputPercentage: React.FC<InputPercentageProps> = ({onChange = () => null, value, ...props}) => {
  const inputRef = useMaskito({
    options: percentageMask,
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
      icon={<Icon name="percentage" />}
    />
  );
};

export default InputPercentage;
