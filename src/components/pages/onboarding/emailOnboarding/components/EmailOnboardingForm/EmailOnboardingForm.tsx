import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./EmailOnboardingForm.module.scss";
import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";

const DataOnboardingForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleNext = () => {
    router.push("/sign-up/password");
  };

  const handleBack = () => {
    router.push("/sign-up");
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("need-email")}</p>
      <p className={styles.subtitle}>{t("contact-with-you")}</p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputTextEmail
            label={t("input-email-label")}
            placeholder={t("input-email-placeholder")}
          />
          <InputTextEmail
            label={t("input-repeat-email-label")}
            placeholder={t("input-repeat-email-placeholder")}
          />
        </div>
        <div className={styles.form__button}>
          <Button
            label={t("btn-back")}
            type="button"
            color="secondary"
            onClick={handleBack}
          />
          <Button label={t("btn-next")} type="button" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default DataOnboardingForm;
