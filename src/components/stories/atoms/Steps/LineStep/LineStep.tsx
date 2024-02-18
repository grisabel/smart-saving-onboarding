import styles from "./LineStep.module.scss";

import { LineStepProps } from "./LineStep.types";

const LineStep: React.FC<LineStepProps> = ({ steps }) => {
  return (
    steps && (
      <div
        className={`${styles.LineStepWp} ${
          styles[`LineStepWp--${steps.length}`]
        }`}
      >
        {steps.map((step, i) => {
          return (
            <div
              key={`step-${i}`}
              className={`${styles.step} 
              ${step.hasError ? styles["step--error"] : ""}
              ${step.isCompleted ? styles["step--completed"] : ""}
              `}
            >
              <div
                className={`${styles.col} ${
                  step.isTransited === false ? styles["col--dash"] : ""
                }`}
              ></div>

              <div className={styles.icon}>{step.icon}</div>
            </div>
          );
        })}
      </div>
    )
  );
};

export default LineStep;
