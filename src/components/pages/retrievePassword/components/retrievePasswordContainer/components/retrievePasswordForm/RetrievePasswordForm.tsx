import React from "react";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/Buttons/Button";
import InputTextEmail from "@/components/stories/Inputs/InputTextEmail";

import styles from "./RetrievePasswordForm.module.scss";
import InputText from "@/components/stories/Inputs/InputText";

const RetrievePasswordForm: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.form}>
      <InputTextEmail
        label={t("input-email-label")}
        placeholder={t("input-email-placeholder")}
      />
      <InputText
        label={t("input-text-birthday-label")}
        placeholder={t("input-text-birthday-placeholder")}
      ></InputText>
      <div className={styles.form__button}>
        <Button label={t("btn-back")} type="button" color="secondary" />
        <Button label={t("btn-next")} type="button" />
      </div>
    </form>
  );
};

export default RetrievePasswordForm;
