export interface InputBaseProps {
  className?: string;

  label?: string;
  placeholder?: string;
  type: "email" | "password" | "text" | "number";
  icon?: JSX.Element;

  value?: string | null;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
  formatValue?: (value: string) => string;
}
