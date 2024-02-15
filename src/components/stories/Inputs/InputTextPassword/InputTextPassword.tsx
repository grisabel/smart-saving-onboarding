import React from "react";
import Image from "next/image";

import styles from "../Inputs.module.scss";

interface InputTextPasswordProps {
  label: string;
  placeholder: string;
}

const InputTextPassword: React.FC<InputTextPasswordProps> = ({
  label,
  placeholder,
}) => {
  return (
    <div className={styles.password}>
      <label className={styles.label}>{label}</label>
      <div className={styles.inputIcon}>
        <input
          className={styles.input}
          type="password"
          placeholder={placeholder}
        />
        <Image
          src="/images/icons/eye-close-icon.svg"
          alt="eye-icon"
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default InputTextPassword;
