import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import InputTextEmail from "@/components/stories/atoms/Inputs/InputTextEmail";
import InputTextPassword from "@/components/stories/atoms/Inputs/InputTextPassword";
import Button from "@/components/stories/atoms/Buttons/Button";

import styles from "./FormLogin.module.scss";

const FormLogin: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <p className={styles.title}>{t("login now")}</p>
      <p className={styles.subtitle}>{t("better financial control")}</p>
      <form className={styles.emailForm}>
        <div className={styles.inputs}>
          <InputTextEmail
            className={styles.emailInput}
            label={t("input-email-label")}
            placeholder={t("input-email-placeholder")}
          />
          <InputTextPassword
            label={t("input-password-label")}
            placeholder={t("input-password-placeholder")}
          />
          <Link href="/retrievePassword" className={styles.forgotPassword}>
            {t("forgotPassword")}
          </Link>
        </div>
        <Button label={t("loginButtonLabel")} type="submit" />
      </form>
    </div>
  );
};

export default FormLogin;
