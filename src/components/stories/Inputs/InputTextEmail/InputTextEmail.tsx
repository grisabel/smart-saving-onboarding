import React from "react";

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
  return (
    <div className={`${styles.email} ${className}`}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="email" placeholder={placeholder} />
    </div>
  );
};

export default InputTextEmail;
