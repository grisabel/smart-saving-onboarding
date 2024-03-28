import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorResult.module.scss";
import CompountInterestChart from "@/components/stories/organisms/CompountInterestChart/CompountInterestChart";
import Link from "next/link";
import { CalculatorFactoryRepository } from "@/repository/CaclculatorRepository/UserFactoryRepository";
import { useEffect, useState } from "react";
import { error } from "console";
import { CompountInterestResponseModel } from "@/repository/CaclculatorRepository/model/response/CompountInterestResponseModel";

const calculatorRepository = CalculatorFactoryRepository.getInstance();

const DataCalculatorResult = () => {
  const [data, setData] = useState<CompountInterestResponseModel[] | null>(null);
  const { t } = useTranslation();

  useEffect(() => {
    calculatorRepository
      .compountInterest({
        annualContribution: 1200,
        initialCapital: 10000,
        period: 30,
        rateInterest: 2.5,
      })
      .then((resul) => {
        setData(resul);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);

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
