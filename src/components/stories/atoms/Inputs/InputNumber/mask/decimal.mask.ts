import { maskitoNumberOptionsGenerator } from "@maskito/kit";

export const decimalMask = maskitoNumberOptionsGenerator({
  decimalZeroPadding: true,
  decimalSeparator: ",",
  thousandSeparator: ".",
  precision: 2,
});
