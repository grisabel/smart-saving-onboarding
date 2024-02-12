import styles from "./LineStep.module.scss";

const LineStep: React.FC = () => {
  return (
    <div className={styles.LineStepWp}>
      <div className={styles.step}>
        <div className={styles.step__icon}>icon</div>
      </div>

      <div className={styles.step}>
        <div className={styles.step__col}></div>

        <div className={styles.step__icon}>icon</div>
      </div>

      <div className={styles.step}>
        <div
          className={`${styles.step__col} ${styles["step__col--dash"]}`}
        ></div>
        <div className={styles.step__icon}>icon</div>
      </div>
    </div>
  );
};

export default LineStep;
