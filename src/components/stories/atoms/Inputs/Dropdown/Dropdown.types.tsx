export interface DropdownProps {
  className?: string;

  id: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;

  options: InputOption[];
  value?: string | null;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputOption {
  value: string;
  label: string;
}
