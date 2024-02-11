import React from "react";

import { useTranslation } from "react-i18next";
import styles from "../Inputs.module.scss";

interface InputTextEmailProps {
  label: string;
  placeholder: string;
  className?: string;
}

const InputTextEmail: React.FC<InputTextEmailProps> = ({
  className,
  label,
  placeholder,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles.email} ${className}`}>
      <label className={styles.label}>{t(label)}</label>
      <input
        className={styles.input}
        type="email"
        placeholder={t(placeholder)}
      />
    </div>
  );
};

export default InputTextEmail;
