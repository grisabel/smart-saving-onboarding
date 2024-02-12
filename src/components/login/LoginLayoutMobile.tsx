import React, { ReactNode } from "react";
import styles from "@/styles/components/login/LoginLayout.module.css";
import Logo from "../stories/Logo";
import Text from "../stories/Text";

import Button from "@/components/stories/Buttons/Button";

import { useTranslation } from "react-i18next";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Logo></Logo>
      <div>
        <Text text={t("login now")} weight="bold" />
        <Text text={t("better financial control")} weight="thin" />
        <Button label={t("loginButtonLabel")} />
        <Button label={t("registerButtonLabel")} color="secondary" />
      </div>
    </div>
  );
};

export default LoginLayoutMobile;
