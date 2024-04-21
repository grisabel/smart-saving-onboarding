import React from "react";
import { useTranslation } from "@/i18n";

import { PasswordValidatorProps } from "./PasswordValidator.types";
import Validator from "../Validator";

const PasswordValidator: React.FC<PasswordValidatorProps> = ({
  lenght,
  lowercase,
  number,
  specialChar,
  uppercase,
  equals,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <Validator
      rules={[
        { status: lenght, description: t("password-validator-lenght-rule") },
        {
          status: uppercase,
          description: t("password-validator-uppercase-rule"),
        },
        {
          status: lowercase,
          description: t("password-validator-lowercase-rule"),
        },
        { status: number, description: t("password-validator-number-rule") },
        {
          status: specialChar,
          description: t("password-validator-special-char-rule"),
        },
        {
          status: equals,
          description: t("password-validator-equals-rule")
        }
      ]}
      className={className}
    />
  );
};

export default PasswordValidator;
