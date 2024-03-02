export interface DropdownProps {
  className?: string;

  id: string;
  label?: string;
  placeholder?: string;

  options: InputOption[];
  value?: string | null;
  onChange?: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputOption {
  value: string;
  label: string;
}
