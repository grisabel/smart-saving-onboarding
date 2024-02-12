import React from "react";
import Image from "next/image";
import styles from "./InputTextPassword.module.scss";

interface PasswordInputProps {
  label: string;
  placeholder: string;
}

const InputTextPassword: React.FC<PasswordInputProps> = ({
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
