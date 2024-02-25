import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => null,
  color = "primary",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[`button--${color}`]}`}
    >
      {label}
    </button>
  );
};

export default Button;
