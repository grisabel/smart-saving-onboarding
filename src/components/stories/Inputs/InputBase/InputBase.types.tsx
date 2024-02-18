export interface InputBaseProps {
  className?: string;

  id?: string;
  label?: string;
  placeholder?: string;
  type: "email" | "password" | "text" | "number";
  icon?: JSX.Element;

  value?: string | null;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;

  inputRef?: React.RefCallback<HTMLInputElement>;
}
