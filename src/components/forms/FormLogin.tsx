import React from "react";
import styles from "@/styles/components/forms/Form.module.css";
import ForgotPassword from "../login/ForgotPassword";
import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import BlueButton from "@/components/BlueButton";

const FormLogin: React.FC = () => {
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
      <BlueButton label="loginButtonLabel" />
    </form>
  );
};

export default FormLogin;
