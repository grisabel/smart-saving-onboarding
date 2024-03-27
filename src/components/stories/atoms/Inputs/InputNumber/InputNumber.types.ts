import { InputBaseProps } from "../InputBase/InputBase.types";

export type InputNumberProps = Omit<InputBaseProps, "type"> & {
  type?: "integer" | "decimal";
};
