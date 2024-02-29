import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";
import InputTextDate from "@/components/stories/atoms/Inputs/InputTextDate";

import styles from "./DataOnboardingForm.module.scss";
import InputText from "@/components/stories/atoms/Inputs/InputText";

const DataOnboardingForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleNext = () => {
    router.push("/sign-up/email");
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("welcome")}</p>
      <p className={styles.subtitle}>{t("about-yourself")}</p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputText
            label={t("input-text-name-label")}
            placeholder={t("input-text-name-placeholder")}
          />
          <InputText
            label={t("input-text-lastname-label")}
            placeholder={t("input-text-lastname-placeholder")}
          />
          <InputTextDate
            label={t("input-text-birthday-label")}
            placeholder={t("input-text-birthday-placeholder")}
          ></InputTextDate>
          <InputText
            label={t("input-select-goal-label")}
            placeholder={t("input-select-goal-placeholder")}
          />
        </div>
        <div className={styles.form__button}>
          <Button label={t("btn-back")} type="button" color="secondary" />
          <Button label={t("btn-next")} type="button" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default DataOnboardingForm;
