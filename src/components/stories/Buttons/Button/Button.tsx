import React from "react";
import styles from "./Button.module.scss";

interface BlueButtonProps {
  label: string;
  color?: "primary" | "secondary";
  type?: "button" | "submit";
  onClick?: () => void;
}

const Button: React.FC<BlueButtonProps> = ({
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
