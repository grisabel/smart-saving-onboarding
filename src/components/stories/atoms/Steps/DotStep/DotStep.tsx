import styles from "./DotStep.module.scss";

import { DotStepProps } from "./DotStep.types";

const DotStep: React.FC<DotStepProps> = ({ steps }) => {
  return (
    steps && (
      <div className={`${styles.DotStepWp}`}>
        {steps.map((step, i) => {
          return (
            <div
              key={`step-${i}`}
              className={`${styles.step} 
                ${step.hasError ? styles["step--error"] : ""}
                ${step.isTransited ? styles["step--complete"] : ""}`}
            >
              <div className={styles.dot}></div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default DotStep;
