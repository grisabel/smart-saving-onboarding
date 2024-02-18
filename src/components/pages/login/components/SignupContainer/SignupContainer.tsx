import React from "react";
import { t } from "i18next";
import Image from "next/image";

import Button from "@/components/stories/atoms/Buttons/Button";
import styles from "./SignupContainer.module.scss";

const SignupContainer: React.FC = () => {
  const random = Math.floor(Math.random() * 4) + 1;

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
      <Button label={t("registerButtonLabel")} color="secondary" />
    </div>
  );
};

export default SignupContainer;
