import React from "react";
import styles from "@/styles/components/forms/Form.module.css";

import ForgotPassword from "../pages/login/components/ForgotPassword";
import InputTextEmail from "@/components/stories/Inputs/InputTextEmail";
import InputTextPassword from "@/components/stories/Inputs/InputTextPassword";

import Button from "@/components/stories/Buttons/Button";

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
