import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./FormLogin.module.scss";
import ForgotPassword from "../login/ForgotPassword";
import InputTextEmail from "../stories/Inputs/InputTextEmail";
import InputTextPassword from "../stories/Inputs/InputTextPassword/InputTextPassword";
import Button from "@/components/stories/Buttons/Button";

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.form}>
      <InputTextEmail
        extraClassName={styles.form_email}
        label={t("input-email-label")}
        placeholder={t("input-email-placeholder")}
      />
      <InputTextPassword
        label={t("input-password-label")}
        placeholder={t("input-password-placeholder")}
      />
      <ForgotPassword label={t("forgotPassword")} />
      <Button label={t("loginButtonLabel")} />
    </form>
  );
};

export default FormLogin;
