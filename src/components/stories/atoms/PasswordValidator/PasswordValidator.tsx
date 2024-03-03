import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./PasswordValidator.module.scss";
import { PasswordValidatorProps } from "./PasswordValidator.types";

const PasswordValidator: React.FC<PasswordValidatorProps> = ({
  lenght,
  lowercase,
  number,
  specialChar,
  uppercase,
}) => {
  const { t } = useTranslation();

  return (
    <div className={styles["password-validator"]}>
      <p
        className={`${styles.rule} ${
          lenght ? styles["rule--success"] : styles["rule--error"]
        }`}
      >
        {t("password-validator-lenght-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          uppercase ? styles["rule--success"] : styles["rule--error"]
        }`}
      >
        {t("password-validator-uppercase-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          lowercase ? styles["rule--success"] : styles["rule--error"]
        }`}
      >
        {t("password-validator-lowercase-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          number ? styles["rule--success"] : styles["rule--error"]
        }`}
      >
        {t("password-validator-number-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          specialChar ? styles["rule--success"] : styles["rule--error"]
        }`}
      >
        {t("password-validator-special-char-rule")}
      </p>
    </div>
  );
};

export default PasswordValidator;
