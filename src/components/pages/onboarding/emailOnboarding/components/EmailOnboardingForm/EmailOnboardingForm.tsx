import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./EmailOnboardingForm.module.scss";
import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";
import EmailValidator from "@/components/stories/atoms/Validators/EmailValidator";
import { useOnboardingCtx } from "../../../context/OnboardingContext";

const getRuleEmailIgualesEmail = (() => {
  return {
    validate: (_inputValue: string) => {
      if (!_inputValue) return null;
      const isValid = /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(_inputValue);
      return isValid;
    },
  };
})();

const getRuleEmailIgualesEmailRepeat = (() => {
  return {
    validate: (data: { email: string; emailRepeat: string }) => {
      if (!data["email"] || !data["emailRepeat"]) return null;

      const isValid = data["email"] == data["emailRepeat"];
      return isValid;
    },
  };
})();

const DataOnboardingForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const onboardingCtx = useOnboardingCtx();

  const [email, setEmail] = useState<string>(onboardingCtx.email);
  const [emailRepeat, setEmailRepeat] = useState<string>(onboardingCtx.email);

  const [emailValidation, setEmailValidation] = useState<boolean | null>(null);
  const [emailRepeatValidation, setEmailRepeatValidation] = useState<
    boolean | null
  >(null);

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleRepeatEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailRepeat(event.target.value);
  };

  useEffect(() => {
    const rule1 = getRuleEmailIgualesEmail.validate(email);
    setEmailValidation(rule1);

    const rule2 = getRuleEmailIgualesEmailRepeat.validate({
      email,
      emailRepeat,
    });
    setEmailRepeatValidation(rule2);

    if (rule1 && rule2) {
      onboardingCtx.setEmail(email);
    } else {
      onboardingCtx.setEmail("");
    }
  }, [email, emailRepeat]);

  const handleNext = () => {
    router.push("/sign-up/password");
  };

  const handleBack = () => {
    router.push("/sign-up");
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("need-email")}</p>
      <p className={styles.subtitle}>{t("contact-with-you")}</p>
      <form className={styles.form}>
        <div className={styles.inputs}>
          <InputTextEmail
            label={t("input-email-label")}
            placeholder={t("input-email-placeholder")}
            value={email}
            onChange={handleEmail}
          />
          <InputTextEmail
            label={t("input-repeat-email-label")}
            placeholder={t("input-repeat-email-placeholder")}
            value={emailRepeat}
            onChange={handleRepeatEmail}
          />
        </div>
        <EmailValidator
          email={emailValidation}
          emailRepeat={emailRepeatValidation}
          className={styles.validator}
        />
        <div className={styles.form__button}>
          <Button
            label={t("btn-back")}
            type="button"
            color="secondary"
            onClick={handleBack}
          />
          <Button
            label={t("btn-next")}
            type="button"
            onClick={handleNext}
            disabled={!onboardingCtx.email}
          />
        </div>
      </form>
    </div>
  );
};

export default DataOnboardingForm;
