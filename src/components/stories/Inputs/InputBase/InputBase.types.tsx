export interface InputBaseProps {
  className?: string;

  label?: string;
  placeholder?: string;
  type: "email" | "password" | "text" | "number";
  icon?: JSX.Element;
}
