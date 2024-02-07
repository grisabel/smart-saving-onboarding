import React from "react";
import styles from "@/styles/components/Inputs.module.css";
import { useTranslation } from "react-i18next";

interface EmailInputProps {
  label: string;
  placeholder: string;
}

const EmailInput: React.FC<EmailInputProps> = ({ label, placeholder }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.email}>
      <label className={styles.label}>{t(label)}</label>
      <input
        className={styles.input}
        type="email"
        placeholder={t(placeholder)}
      />
    </div>
  );
};

export default EmailInput;
