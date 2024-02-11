import React from "react";
import styles from "@/styles/components/forms/Form.module.css";
import ForgotPassword from "../login/ForgotPassword";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";

import Button from "@/components/stories/Buttons/Button";

import { useTranslation } from "react-i18next";

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <form className={styles.emailForm}>
      <EmailInput
        extraClassName={styles.emailInput}
        label="input-email-label"
        placeholder="input-email-placeholder"
      />
      <PasswordInput
        label="input-password-label"
        placeholder="input-password-placeholder"
      />
      <ForgotPassword label="forgotPassword" />
      <Button label={t("loginButtonLabel")} />
    </form>
  );
};

export default FormLogin;
