import React from "react";
import styles from "@/styles/components/forms/Form.module.css";
import ForgotPassword from "../login/ForgotPassword";
import PasswordInput from "./PasswordInput";
import InputTextEmail from "../stories/Inputs/InputTextEmail";

import Button from "@/components/stories/Buttons/Button";

import { useTranslation } from "react-i18next";

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.emailForm}>
      <InputTextEmail
        extraClassName={styles.emailInput}
        label={t("input-email-label")}
        placeholder={t("input-email-placeholder")}
      />
      <PasswordInput
        label={t("input-password-label")}
        placeholder={t("input-password-placeholder")}
      />
      <ForgotPassword label={t("forgotPassword")} />
      <Button label={t("loginButtonLabel")} />
    </form>
  );
};

export default FormLogin;
