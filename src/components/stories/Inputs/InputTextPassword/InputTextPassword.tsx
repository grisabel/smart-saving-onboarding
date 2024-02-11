import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import styles from "../Inputs.module.scss";

interface InputTextPasswordProps {
  label: string;
  placeholder: string;
}

const InputTextPassword: React.FC<InputTextPasswordProps> = ({
  label,
  placeholder,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles.password}>
      <label className={styles.label}>{t(label)}</label>
      <div className={styles.inputIcon}>
        <input
          className={styles.input}
          type="password"
          placeholder={t(placeholder)}
        />
        <Image
          src="/images/eye-close-icon.png"
          alt="eye-icon"
          width={24}
          height={24}
        />
      </div>
    </div>
  );
};

export default InputTextPassword;
