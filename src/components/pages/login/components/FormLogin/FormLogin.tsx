import React, { FormEvent, useState } from "react";
import { useTranslation } from 'next-i18next';
import Link from "next/link";

import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";
import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./FormLogin.module.scss";
import { SessionFactoryRepository } from "@/repository/SessionRepository/SessionFactoryRepository";
import Alert from "@/components/stories/atoms/Alert";

const sessionRepository = SessionFactoryRepository.getInstance();
export const LOCAL_STORAGE_KEYS = {
  accessToken: "accessToken",
  refreshToken: "refreshToken",
};

const FormLogin: React.FC = () => {
  const { t } = useTranslation('common');

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertOpen, setAlertOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [type, setType] = useState<"warning" | "danger" | null>(null);

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

        const urlToGo = (process.env.NEXT_PUBLIC_APP_URL ?? "")
          .replace(":accessToken", resul.accessToken)
          .replace(":refreshToken", resul.refreshToken);

        document.location.href = urlToGo;
      })
      .catch((error) => {
        if (error?.isInvalidLogin) {
          setTitle("error-login-password-title");
          setDescription("error-login-password-description");
          setType("danger");
          setAlertOpen(true);
        } else {
          setTitle("error-login-server-title");
          setDescription("error-login-server-description");
          setType("warning");
          setAlertOpen(true);
        }
      });
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
      <p className={styles.subtitle}>{t("better financial control")} <a href={process.env.NEXT_PUBLIC_MARKETING_URL}>{t("link-marketing")}</a></p>
      <Alert
        title={t(title)}
        description={t(description)}
        type={type as "warning" | "danger"}
        open={alertOpen}
        setOpen={setAlertOpen}
      />
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
