import React, { ReactNode } from "react";
import Logo from "../../../stories/Logo";

import Button from "@/components/stories/Buttons/Button";

import styles from "./LoginContainerDesktop.module.scss";

import { useTranslation } from "react-i18next";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Logo></Logo>
      <div>
        <p className={styles.title}>{t("login now")}</p>
        <p className={styles.subtitle}>{t("better financial control")}</p>
        <Button label={t("loginButtonLabel")} />
        <Button label={t("registerButtonLabel")} color="secondary" />
      </div>
    </div>
  );
};

export default LoginLayoutMobile;
