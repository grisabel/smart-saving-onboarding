import styles from "./LoginLayoutMobile.module.scss";

import React from "react";
import { useTranslation } from 'next-i18next';

import FormLogin from "../../components/FormLogin";
import Button from "@/components/stories/atoms/Buttons/Button";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";
import LanguageSwitch from "../../components/LanguageSwitch/LanguageSwitch";
import { useRouter } from "next/router";

const LoginLayoutMobile: React.FC = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const handleOnboarding = () => {
    router.push("/sign-up");
  };

  return (
    <LayoutMobile>
      <div className={styles.loginLayoutMobile}>
        <FormLogin />
        <hr />
        <Button label={t("registerButtonLabel")} color="secondary"  onClick={handleOnboarding} />
        <LanguageSwitch/>
      </div>
    </LayoutMobile>
  );
};

export default LoginLayoutMobile;
