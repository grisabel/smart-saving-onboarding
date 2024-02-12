import React from "react";
import styles from "./Text.module.scss";

interface TextProps {
  text: string;
  weight?: "bold" | "regular" | "thin";
}

const Text: React.FC<TextProps> = ({ text, weight = "regular" }) => {
  return <p className={styles[`text--${weight}`]}>{text}</p>;
};

export default Text;
