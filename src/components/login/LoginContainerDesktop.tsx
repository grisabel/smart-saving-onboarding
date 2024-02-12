import React from "react";
import { useTranslation } from "react-i18next";

import styles from "@/styles/components/login/LoginContainer.module.css";
import Logo from "@/components/stories/Logo";
import FormLogin from "../forms/FormLogin";
import Text from "../stories/Text";

const LoginContainer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.container}>
      <Logo></Logo>
      <div>
        <Text text={t("login now")} weight="bold" />
        <Text text={t("better financial control")} weight="thin" />
        <FormLogin />
      </div>
    </div>
  );
};

export default LoginContainer;
