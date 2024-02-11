import React from "react";
import { t } from "i18next";

import Logo from "@/components/stories/Logo";
import FormLogin from "./FormLogin/FormLogin";

import styles from "./LoginContainerDesktop.module.scss";

const LoginContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <Logo></Logo>
      <div>
        <p className={styles.title}>{t("login now")}</p>
        <p className={styles.subtitle}>{t("better financial control")}</p>
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
