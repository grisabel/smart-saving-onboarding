import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorResult.module.scss";
import CompountInterestChart from "@/components/stories/organisms/CompountInterestChart/CompountInterestChart";

const DataCalculatorResult = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("interest-calculator-resul-title")}</p>
      <div className={styles.chart}>
        <CompountInterestChart />
      </div>
      <p className={styles.subtitle}>{t("interest-calculator-resul-info-1")}</p>
      <p className={styles.subtitle}>{t("interest-calculator-resul-info-2")}</p>
    </div>
  );
};

export default DataCalculatorResult;
