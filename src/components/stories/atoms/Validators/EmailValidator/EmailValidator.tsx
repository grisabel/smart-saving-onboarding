import React from "react";
import { useTranslation } from "@/i18n";

import { EmailValidatorProps } from "./EmailValidator.types";
import Validator from "../Validator";

const EmailValidator: React.FC<EmailValidatorProps> = ({
  email,
  emailRepeat,
  className,
}) => {
  const { t } = useTranslation();

  return (
    <Validator
      rules={[
        { status: email, description: t("email-validator-domain-rule") },
        {
          status: emailRepeat,
          description: t("email-validator-equals-rule"),
        },
      ]}
      className={className}
    />
  );
};

export default EmailValidator;
