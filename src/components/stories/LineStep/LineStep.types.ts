interface StepProps {
  isWaiting?: boolean;
  hasError?: boolean;
  icon: JSX.Element;
}

export interface LineStepProps {
  steps: StepProps[];
}
