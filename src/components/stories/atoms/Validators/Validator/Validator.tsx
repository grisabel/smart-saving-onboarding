import React from "react";
import { useTranslation } from 'next-i18next';

import styles from "./Validator.module.scss";
import { ValidatorProps } from "./Validator.types";

const Validator: React.FC<ValidatorProps> = ({ rules, className }) => {
  return (
    <div className={`${styles.validatorGroup} ${className}`}>
      {rules.map((rule, i) => {
        return (
          <p
            key={`rule-${i}`}
            className={`${styles.rule} ${
              rule.status !== null
                ? rule.status
                  ? styles["rule--success"]
                  : styles["rule--error"]
                : ""
            }`}
          >
            {rule.description}
          </p>
        );
      })}
    </div>
  );
};

export default Validator;
