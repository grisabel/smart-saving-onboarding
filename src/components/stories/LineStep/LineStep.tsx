import styles from "./LineStep.module.scss";

const LineStep: React.FC = () => {
  return (
    <div className={`${styles.LineStepWp} ${styles[`LineStepWp--${4}`]}`}>
      <div className={styles.step}>
        <div className={styles.icon}>icon</div>
      </div>

      <div className={styles.step}>
        <div className={styles.col}></div>

        <div className={styles.icon}>icon</div>
      </div>

      <div className={styles.step}>
        <div className={`${styles.col} ${styles["col--dash"]}`}></div>
        <div className={styles.icon}>icon</div>
      </div>

      <div className={`${styles.step} ${styles["step--error"]}`}>
        <div className={`${styles.col} ${styles["col--dash"]}`}></div>
        <div className={styles.icon}>icon</div>
      </div>
    </div>
  );
};

export default LineStep;
