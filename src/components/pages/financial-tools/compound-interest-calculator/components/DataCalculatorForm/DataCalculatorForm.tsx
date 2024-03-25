import { useTranslation } from "react-i18next";
import styles from "./DataCalculatorForm.module.scss";
import InputNumber from "@/components/stories/atoms/Inputs/InputNumber";
import InputAmount from "@/components/stories/atoms/Inputs/InputAmount";
import InputPercentage from "@/components/stories/atoms/Inputs/InputPercentage";
import Dropdown from "@/components/stories/atoms/Inputs/Dropdown";

const DataCalculatorForm = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("interest-calculator-title")}</p>
      <p className={styles.title}>{t("interest-calculator-input-step1")}</p>
      <InputAmount label={t('interest-calculator-input-step1-label')} placeholder="0,00"/>
      <p className={styles.subtitle}>{t("interest-calculator-input-step1-description")}</p>

      <p className={styles.title}>{t("interest-calculator-input-step2")}</p>
      <InputAmount label={t('interest-calculator-input-step21-label')} placeholder="0,00"/>
      <p className={styles.subtitle}>{t("interest-calculator-input-step21-description")}</p>
      <InputNumber label={t('interest-calculator-input-step22-label')} placeholder="0,00" type="integer"/>
      <p className={styles.subtitle}>{t("interest-calculator-input-step22-description")}</p>

      <p className={styles.title}>{t("interest-calculator-input-step3")}</p>
      <InputPercentage label={t('interest-calculator-input-step3-label')} placeholder="0,00"/>
      <p className={styles.subtitle}>{t("interest-calculator-input-step3-description")}</p>


      <p className={styles.title}>{t("interest-calculator-input-step4")}</p>
      <Dropdown
            id={"interest-calculator-input-step4-label"}
            label={t("interest-calculator-input-step4-label")}
            placeholder={t("interest-calculator-input-step4-value")}
            disabled={true}
            options={[]}
          />
      <p className={styles.subtitle}>{t("interest-calculator-input-step4-description")}</p>

    </div>
  );
};

export default DataCalculatorForm;
