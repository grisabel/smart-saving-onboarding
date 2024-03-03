import React, { FormEvent } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./PasswordOnboardingForm.module.scss";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";
import { UserFactoryRepository } from "@/repository/UserRepository/UserFactoryRepository";

const userRepository = UserFactoryRepository.getInstance();

const PasswordOnboardingForm: React.FC = () => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    userRepository
      .register({
        dateBirth: "14/10/1997",
        email: "delgado@gmail.com",
        repeatEmail: "delgado@gmail.com",
        firstName: "jose manuel",
        lastName: "delhado trueba",
        objetive: "objet 1",
        password: "12345_aA!",
        repeatPassword: "12345_aA!",
      })
      .then(() => {
        router.push("/sign-up/success");
      })
      .catch(() => {
        router.push("/retrieve-password/error");
      });
  };

  const handleBack = () => {
    router.push("/sign-up/email");
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("lock-account")}</p>
      <p className={styles.subtitle}>{t("secure-password")}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <InputTextPassword
            label={t("input-password-label")}
            placeholder={t("input-password-placeholder")}
          />
          <InputTextPassword
            label={t("input-repeat-password-label")}
            placeholder={t("input-repeat-password-placeholder")}
          />
        </div>
        <div className={styles.form__button}>
          <Button
            label={t("btn-back")}
            type="button"
            color="secondary"
            onClick={handleBack}
          />
          <Button label={t("btn-next")} type="submit" />
        </div>
      </form>
    </div>
  );
};

export default PasswordOnboardingForm;
