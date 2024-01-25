import React from "react";
import styles from "@/styles/FontText.module.css";
import { useTranslation } from "react-i18next";

interface ThinTextProps {
  text: string;
}

const ThinText: React.FC<ThinTextProps> = ({ text }) => {
  const { t } = useTranslation();

  return <p className={styles.thinText}>{t(text)}</p>;
};

export default ThinText;
