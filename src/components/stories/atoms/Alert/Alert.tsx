import React from "react";
import Image from "next/image";

import styles from "./Alert.module.scss";

interface AlertProps {
  title: string;
  description: string;
  type: "warning" | "danger";
}

const Alert: React.FC<AlertProps> = ({ title, description, type }) => {
  let imageSrc, altImage;

  switch (type) {
    case "danger":
      imageSrc = "/images/icons/alert_danger.svg";
      altImage = "danger";
      break;
    case "warning":
      imageSrc = "/images/icons/alert_warning.svg";
      altImage = "warning";
      break;
  }

  return (
    <div className={`${styles.container} ${styles[`container--${type}`]}`}>
      <div className={`${styles.icon}`}>
        {imageSrc && altImage && (
          <Image src={imageSrc} alt={altImage} width={16} height={16}></Image>
        )}
      </div>
      <div className={styles.content}>
        <p className={styles.content__title}>{title}</p>
        <p className={styles.content__description}>{description}</p>
      </div>
      <Image
        className={styles.close}
        src="/images/icons/close.svg"
        alt="close"
        width={24}
        height={24}
      ></Image>
    </div>
  );
};

export default Alert;
