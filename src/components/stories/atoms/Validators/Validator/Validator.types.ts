export interface ValidatorProps {
  rules: ValidatorRule[];
  className?: string;
}

type ValidatorRule = {
  status: null | boolean;
  description: string;
};
