import React from "react";
import styles from "./BlueButton.module.css";

interface BlueButtonProps {
  label: string;
  //TODO ADD ONCLICK
}

const BlueButton: React.FC<BlueButtonProps> = ({ label }) => {
  return (
    <button type="submit" className={styles.button}>
      {label}
    </button>
  );
};

export default BlueButton;
