import React from "react";
import styles from "@/styles/components/BlueButton.module.css";
import { useTranslation } from "react-i18next";

interface BlueButtonProps {
  label: string;
}

const BlueButton: React.FC<BlueButtonProps> = ({ label }) => {
  const { t } = useTranslation();

  return (
    <button type="submit" className={styles.button}>
      {t(label)}
    </button>
  );
};

export default BlueButton;
