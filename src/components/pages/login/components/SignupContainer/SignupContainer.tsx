import React, { useMemo } from "react";
import Image from "next/image";

import Button from "@/components/stories/atoms/Buttons/Button";
import styles from "./SignupContainer.module.scss";
import { useRouter } from "next/router";
import LanguageSwitch from "../LanguageSwitch/LanguageSwitch";
import { useTranslation } from "react-i18next";

const SignupContainer: React.FC = () => {

  const {t} = useTranslation();

  const random = useMemo(() => Math.floor(Math.random() * 4) + 1, [])
  const router = useRouter();

  const handleOnboarding = () => {
    router.push("/sign-up");
  };
  return (
    <div className={styles.container}>
      <Image
        src={`/images/login/login_${random}.svg`}
        alt="login"
        width={100}
        height={357}
      ></Image>
      <p>{t("achieve-goals")}</p>
      <p>{t("create-account")}✨</p>
      <LanguageSwitch className={styles.dropdown}/>
      <Button
        label={t("registerButtonLabel")}
        color="secondary"
        onClick={handleOnboarding}
      />
    </div>
  );
};

export default SignupContainer;
