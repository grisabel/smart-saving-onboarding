import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorResult.module.scss";


const DataCalculatorResult = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <h1>DataCalculatorResult</h1>
    </div>
  );
};

export default DataCalculatorResult;
