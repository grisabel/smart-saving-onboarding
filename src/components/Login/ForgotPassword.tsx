import React from "react";
import styles from "@/styles/FontText.module.css";
import { useTranslation } from "react-i18next";

interface ForgetPasswordProps {
  label: string;
}

const ForgotPassword: React.FC<ForgetPasswordProps> = ({ label }) => {
  const { t } = useTranslation();

  return <a className={styles.forgotPassword}>{t(label)}</a>;
};

export default ForgotPassword;
