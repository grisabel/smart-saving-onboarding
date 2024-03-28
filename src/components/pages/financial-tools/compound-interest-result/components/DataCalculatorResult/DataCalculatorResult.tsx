import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorResult.module.scss";
import CompountInterestChart from "@/components/stories/organisms/CompountInterestChart/CompountInterestChart";
import Link from "next/link";
import { useCompountInterestCtx } from "../../../context/OnboardingContext";

const DataCalculatorResult = () => {
  const { t } = useTranslation();

  const {data} = useCompountInterestCtx()

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("interest-calculator-resul-title")}</p>
      <p className={styles.subtitle}>{t("interest-calculator-resul-info-1")}</p>
      {data && (
        <div className={styles.chart}>
          <CompountInterestChart data={data}/>
        </div>
      )}
      <p className={styles.subtitle}>
        <span className={styles.title}>
          {t("interest-calculator-resul-info-21a")}
        </span>
        <span>{t("interest-calculator-resul-info-21b")}</span>
        <Link
          href="/financial-tools/compound-interest-calculator"
          className={styles.Link}
        >
          {t("interest-calculator-resul-info-22")}
        </Link>
        <span>{t("interest-calculator-resul-info-23")}</span>
      </p>
    </div>
  );
};

export default DataCalculatorResult;
