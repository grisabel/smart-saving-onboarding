import React from "react";

import styles from "./Alert.module.scss";
import Icon from "../Icon";

export interface AlertProps {
  title: string;
  description: string;
  type: "warning" | "danger";
  open: boolean;
  setOpen: (value: boolean) => void;
}

const Alert: React.FC<AlertProps> = ({
  title,
  description,
  type,
  open,
  setOpen,
}) => {
  let name: "danger" | "info-circle";

  switch (type) {
    case "danger":
      name = "danger";
      break;
    case "warning":
      name = "info-circle";
      break;
  }

  return (
    open && (
      <div className={`${styles.container} ${styles[`container--${type}`]}`}>
        <div className={`${styles.icon}`}>{name && <Icon name={name} />}</div>
        <div className={styles.content}>
          <p className={styles.content__title}>{title}</p>
          <p className={styles.content__description}>{description}</p>
        </div>
        <Icon
          name="cross-big"
          className={styles.close}
          onClick={() => {
            setOpen(false);
          }}
        />
      </div>
    )
  );
};

export default Alert;
