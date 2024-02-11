import React from "react";
import styles from "./Button.module.scss";

interface BlueButtonProps {
  //TODO ADD ONCLICK
  //todo type
  label: string;
  color?: "primary" | "secondary";
}

const Button: React.FC<BlueButtonProps> = ({ label, color = "primary" }) => {
  return (
    <button
      type="submit"
      className={`${styles.button} ${styles[`button--${color}`]}`}
    >
      {label}
    </button>
  );
};

export default Button;
