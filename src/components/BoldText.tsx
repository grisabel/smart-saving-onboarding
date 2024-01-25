import React from "react";
import styles from "@/styles/FontText.module.css";
import { useTranslation } from "react-i18next";

interface BoldTextProps {
  text: string;
}

const BoldText: React.FC<BoldTextProps> = ({ text }) => {
  const { t } = useTranslation();

  return <p className={styles.boldText}>{t(text)}</p>;
};

export default BoldText;
