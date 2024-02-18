import React from "react";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";
import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";
import InputTextDate from "@/components/stories/atoms/Inputs/InputTextDate";

import styles from "./RetrievePasswordForm.module.scss";

const RetrievePasswordForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.form}>
      <InputTextEmail
        label={t("input-email-label")}
        placeholder={t("input-email-placeholder")}
      />
      <InputTextDate
        label={t("input-text-birthday-label")}
        placeholder={t("input-text-birthday-placeholder")}
      ></InputTextDate>
      <div className={styles.form__button}>
        <Button label={t("btn-back")} type="button" color="secondary" />
        <Button label={t("btn-next")} type="button" />
      </div>
    </form>
  );
};

export default RetrievePasswordForm;
