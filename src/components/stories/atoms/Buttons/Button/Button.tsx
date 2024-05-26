import React from "react";
import styles from "./Button.module.scss";

export interface ButtonProps {
  label: string;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick = () => null,
  color = "primary",
  type = "button",
  disabled,
  className,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${styles.button} ${styles[`button--${color}`]} ${className}`}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
