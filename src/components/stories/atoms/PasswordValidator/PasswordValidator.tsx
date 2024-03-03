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
  className,
}) => {
  const { t } = useTranslation();

  return (
    <div className={`${styles["password-validator"]} ${className}`}>
      <p
        className={`${styles.rule} ${
          lenght !== null
            ? lenght
              ? styles["rule--success"]
              : styles["rule--error"]
            : ""
        }`}
      >
        {t("password-validator-lenght-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          uppercase !== null
            ? uppercase
              ? styles["rule--success"]
              : styles["rule--error"]
            : ""
        }`}
      >
        {t("password-validator-uppercase-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          lowercase !== null
            ? lowercase
              ? styles["rule--success"]
              : styles["rule--error"]
            : ""
        }`}
      >
        {t("password-validator-lowercase-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          number !== null
            ? number
              ? styles["rule--success"]
              : styles["rule--error"]
            : ""
        }`}
      >
        {t("password-validator-number-rule")}
      </p>
      <p
        className={`${styles.rule} ${
          specialChar !== null
            ? specialChar
              ? styles["rule--success"]
              : styles["rule--error"]
            : ""
        }`}
      >
        {t("password-validator-special-char-rule")}
      </p>
    </div>
  );
};

export default PasswordValidator;
