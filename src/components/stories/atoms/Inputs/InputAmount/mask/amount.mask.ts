import { maskitoNumberOptionsGenerator } from "@maskito/kit";

export const amountMask = maskitoNumberOptionsGenerator({
  decimalZeroPadding: true,
  decimalSeparator: ",",
  thousandSeparator: ".",
  precision: 2,
});
