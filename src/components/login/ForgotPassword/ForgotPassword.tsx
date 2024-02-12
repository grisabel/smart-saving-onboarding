import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./ForgotPassword.module.scss";

interface ForgetPasswordProps {
  label: string;
}

const ForgotPassword: React.FC<ForgetPasswordProps> = ({ label }) => {
  const { t } = useTranslation();

  return (
    <a href="/forgotPassword" className={styles.text}>
      {t(label)}
    </a>
  );
};

export default ForgotPassword;
