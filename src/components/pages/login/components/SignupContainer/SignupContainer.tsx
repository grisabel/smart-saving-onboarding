import React from "react";
import { t } from "i18next";
import Image from "next/image";

import Button from "@/components/stories/atoms/Buttons/Button";
import styles from "./SignupContainer.module.scss";
import { useRouter } from "next/router";

const SignupContainer: React.FC = () => {
  const random = Math.floor(Math.random() * 4) + 1;
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
      <Button
        label={t("registerButtonLabel")}
        color="secondary"
        onClick={handleOnboarding}
      />
    </div>
  );
};

export default SignupContainer;
