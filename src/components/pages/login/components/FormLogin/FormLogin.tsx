import React from "react";

import ForgotPassword from "../ForgotPassword";
import InputTextEmail from "@/components/stories/Inputs/InputTextEmail";
import InputTextPassword from "@/components/stories/Inputs/InputTextPassword";
import Button from "@/components/stories/Buttons/Button";

import styles from "./FormLogin.module.scss";

import { useTranslation } from "react-i18next";

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.emailForm}>
      <InputTextEmail
        className={styles.emailInput}
        label={t("input-email-label")}
        placeholder={t("input-email-placeholder")}
      />
      <InputTextPassword
        label={t("input-password-label")}
        placeholder={t("input-password-placeholder")}
      />
      <ForgotPassword label="forgotPassword" />
      <Button label={t("loginButtonLabel")} />
    </form>
  );
};

export default FormLogin;
