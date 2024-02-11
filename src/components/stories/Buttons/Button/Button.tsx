import React from "react";
import styles from "./Button.module.css";

interface BlueButtonProps {
  //TODO ADD ONCLICK
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
