import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorForm.module.scss";
import InputNumber from "@/components/stories/atoms/Inputs/InputNumber";
import InputAmount from "@/components/stories/atoms/Inputs/InputAmount";
import InputPercentage from "@/components/stories/atoms/Inputs/InputPercentage";
import Dropdown from "@/components/stories/atoms/Inputs/Dropdown";
import { FormEvent, useState } from "react";
import Button from "@/components/stories/atoms/Buttons/Button";
import { useRouter } from "next/router";

const DataCalculatorForm = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const [annualContribution, setAnnualContribution] = useState<number | null>(
    null
  );
  const [initialCapital, setInitialCapital] = useState<number | null>(null);
  const [period, setPeriod] = useState<number | null>(null);
  const [rateInterest, setRateInterest] = useState<number | null>(null);

  const isDisabled = () => {
    return !annualContribution || !initialCapital || !period || !rateInterest;
  };

  const handleAnnualContribution = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event?.target?.value) {
      setRateInterest(null);
    }
    setAnnualContribution(parseFloat(event.target.value));
  };

  const handleInitialCapital = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.value) {
      setRateInterest(null);
    }
    setInitialCapital(parseFloat(event.target.value));
  };

  const handlePeriod = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event?.target?.value) {
      setRateInterest(null);
    }
    setPeriod(parseFloat(event.target.value));
  };

  const handleSetRateInterest = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!event?.target?.value) {
      setRateInterest(null);
    }
    setRateInterest(parseFloat(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    router.push(
      "/financial-tools/compound-interest-calculator/resul?initialCapital=:initialCapital&annualContribution=:annualContribution&rateInterest=:rateInterest&period=:period"
        .replace(":annualContribution", `${annualContribution}`)
        .replace(":initialCapital", `${initialCapital}`)
        .replace(":period", `${period}`)
        .replace(":rateInterest", `${rateInterest}`)
    );
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <p className={styles.title}>{t("interest-calculator-title")}</p>
      <p className={styles.title}>{t("interest-calculator-input-step1")}</p>
      <InputAmount
        label={t("interest-calculator-input-step1-label")}
        placeholder="0,00"
        onChange={handleInitialCapital}
      />
      <p className={styles.subtitle}>
        {t("interest-calculator-input-step1-description")}
      </p>

      <p className={styles.title}>{t("interest-calculator-input-step2")}</p>
      <InputAmount
        label={t("interest-calculator-input-step21-label")}
        placeholder="0,00"
        onChange={handleAnnualContribution}
      />
      <p className={styles.subtitle}>
        {t("interest-calculator-input-step21-description")}
      </p>
      <InputNumber
        label={t("interest-calculator-input-step22-label")}
        placeholder="0,00"
        type="integer"
        onChange={handlePeriod}
      />
      <p className={styles.subtitle}>
        {t("interest-calculator-input-step22-description")}
      </p>

      <p className={styles.title}>{t("interest-calculator-input-step3")}</p>
      <InputPercentage
        label={t("interest-calculator-input-step3-label")}
        placeholder="0,00"
        onChange={handleSetRateInterest}
      />
      <p className={styles.subtitle}>
        {t("interest-calculator-input-step3-description")}
      </p>

      <p className={styles.title}>{t("interest-calculator-input-step4")}</p>
      <Dropdown
        id={"interest-calculator-input-step4-label"}
        label={t("interest-calculator-input-step4-label")}
        placeholder={t("interest-calculator-input-step4-value")}
        disabled={true}
        options={[]}
      />
      <p className={styles.subtitle}>
        {t("interest-calculator-input-step4-description")}
      </p>

      <Button
        label={t("interest-calculator-btn")}
        disabled={isDisabled()}
        type="submit"
        className={styles.btn}
      />
    </form>
  );
};

export default DataCalculatorForm;
