import React, { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from 'next-i18next';

import Button from "@/components/stories/atoms/Buttons/Button";
import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";
import InputTextDate from "@/components/stories/atoms/Inputs/InputTextDate";
import { PasswordFactoryRepository } from "@/repository/PasswordRepository/PasswordFactoryRepository";
import { useForgotPasswordCtx } from "../../../context/ForgotPasswordContext";

import styles from "./RetrievePasswordForm.module.scss";

const RetrievePasswordForm: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const passwordRepository = PasswordFactoryRepository.getInstance();
  const forgotPasswordCtx = useForgotPasswordCtx();

  const [email, setEmail] = useState<string>("");
  const [dateBirth, setDateBirth] = useState<string>("");

  const isDiableBtn = (): boolean => {
    return !email || !dateBirth;
  };

  const handleSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    forgotPasswordCtx.setEmail(email);

    passwordRepository
      .retrieve({ email: email, dateBirth: dateBirth })
      .then(() => router.push("/forgot-password/email-sent"))
      .catch(() => router.push("/forgot-password/error"));
  };

  const handleBack = () => {
    router.push("/");
  };

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInputDateBirth = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateBirth(event.target.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("forgot-your-password")}</p>
      <p className={styles.subtitle}>{t("give-your-data")}</p>
      <form className={styles.form} onSubmit={handleSumbit}>
        <div className={styles.inputs}>
          <InputTextEmail
            label={t("input-email-label")}
            placeholder={t("input-email-placeholder")}
            onChange={handleInputEmail}
          />
          <InputTextDate
            label={t("input-text-birthday-label")}
            placeholder={t("input-text-birthday-placeholder")}
            onChange={handleInputDateBirth}
          ></InputTextDate>
        </div>
        <div className={styles.form__button}>
          <Button
            label={t("btn-back")}
            type="button"
            color="secondary"
            onClick={handleBack}
          />
          <Button
            label={t("btn-next")}
            type="submit"
            disabled={isDiableBtn()}
          />
        </div>
      </form>
    </div>
  );
};

export default RetrievePasswordForm;
