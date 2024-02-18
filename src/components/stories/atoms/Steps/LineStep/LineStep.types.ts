interface StepProps {
  isTransited?: boolean;
  hasError?: boolean;
  isCompleted?: boolean;
  icon: JSX.Element;
}

export interface LineStepProps {
  steps: StepProps[];
}
