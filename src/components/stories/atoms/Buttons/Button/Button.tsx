import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => null,
  color = "primary",
  type = "button",
  disabled,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[`button--${color}`]}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
