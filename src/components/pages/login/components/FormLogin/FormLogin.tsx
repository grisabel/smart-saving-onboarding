import React, { FormEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";
import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./FormLogin.module.scss";
import { SessionFactoryRepository } from "@/repository/SessionRepository/SessionFactoryRepository";

const sessionRepository = SessionFactoryRepository.getInstance();
const LOCAL_STORAGE_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sessionRepository
      .login({ email: email, password: password })
      .then((resul) => {
        window.localStorage.setItem(
          LOCAL_STORAGE_KEYS.refreshToken,
          resul.refreshToken
        );
        window.localStorage.setItem(
          LOCAL_STORAGE_KEYS.accessToken,
          resul.accessToken
        );
        document.location.href = process.env.NEXT_PUBLIC_APP_URL ?? "";
      })
      .catch((error) => console.log(error));
  };

  const handleInputEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleInputPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("login now")}</p>
      <p className={styles.subtitle}>{t("better financial control")}</p>
      <form className={styles.emailForm} onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <InputTextEmail
            className={styles.emailInput}
            label={t("input-email-label")}
            placeholder={t("input-email-placeholder")}
            onChange={handleInputEmail}
          />
          <InputTextPassword
            label={t("input-password-label")}
            placeholder={t("input-password-placeholder")}
            onChange={handleInputPassword}
          />
          <Link href="/forgot-password" className={styles.forgotPassword}>
            {t("forgotPassword")}
          </Link>
        </div>
        <Button label={t("loginButtonLabel")} type="submit" />
      </form>
    </div>
  );
};

export default FormLogin;
