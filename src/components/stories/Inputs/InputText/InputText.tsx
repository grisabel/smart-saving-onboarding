import React from "react";

import styles from "../Inputs.module.scss";

interface InputTextProps {
  label: string;
  placeholder: string;
}

const InputText: React.FC<InputTextProps> = ({ label, placeholder }) => {
  return (
    <div className={styles.text}>
      <label className={styles.label}>{label}</label>
      <input className={styles.input} type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputText;
