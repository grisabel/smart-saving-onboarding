import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";

import styles from "./ResetPasswordForm.module.scss";

const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleNext = () => {
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("choose-password")}</p>
      <p className={styles.subtitle}>{t("not-forget-password")}</p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputTextPassword
            label={t("input-password-label")}
            placeholder={t("input-password-placeholder")}
          />
          <InputTextPassword
            label={t("input-repeat-password-label")}
            placeholder={t("input-repeat-password-placeholder")}
          />
        </div>
        <div className={styles.form__button}>
          <Button label={t("btn-next")} type="button" onClick={handleNext} />
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
