export interface DropdownProps {
  className?: string;

  id: string;
  label?: string;
  placeholder?: string;
  icon?: JSX.Element;

  value?: string | null;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}
