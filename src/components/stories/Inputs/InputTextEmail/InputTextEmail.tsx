import React from "react";
import styles from "./InputTextEmail.module.scss";

interface EmailInputProps {
  label: string;
  placeholder: string;
  extraClassName: string;
}

const InputTextEmail: React.FC<EmailInputProps> = ({
  extraClassName,
  label,
  placeholder,
}) => {
  return (
    <div className={`${styles.email} ${extraClassName}`}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="email" placeholder={placeholder} />
    </div>
  );
};

export default InputTextEmail;
