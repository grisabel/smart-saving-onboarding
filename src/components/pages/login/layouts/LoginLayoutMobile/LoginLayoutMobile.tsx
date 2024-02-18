import styles from "./LoginLayoutMobile.module.scss";

import React from "react";
import { useTranslation } from "react-i18next";

import FormLogin from "../../components/FormLogin";
import Button from "@/components/stories/atoms/Buttons/Button";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation();
  return (
    <LayoutMobile>
      <div className={styles.loginLayoutMobile}>
        <FormLogin />
        <hr />
        <Button label={t("registerButtonLabel")} color="secondary" />
      </div>
    </LayoutMobile>
  );
};

export default LoginLayoutMobile;
