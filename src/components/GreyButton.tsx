import React from "react";
import styles from "@/styles/components/GreyButton.module.css";
import { useTranslation } from "react-i18next";

interface GreyButtonProps {
  label: string;
}

const GreyButton: React.FC<GreyButtonProps> = ({ label }) => {
  const { t } = useTranslation();

  return <button className={styles.button}>{t(label)}</button>;
};

export default GreyButton;
