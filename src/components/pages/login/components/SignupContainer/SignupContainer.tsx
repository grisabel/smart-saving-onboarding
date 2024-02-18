import React from "react";
import { t } from "i18next";
import Image from "next/image";

import Button from "@/components/stories/atoms/Buttons/Button";
import styles from "./SignupContainer.module.scss";

const SignupContainer: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/images/login/login_1.svg"
        alt="login"
        width={100}
        height={100}
      ></Image>
      <p>{t("achieve-goals")}</p>
      <p>{t("create-account")}✨</p>
      <Button label={t("registerButtonLabel")} color="secondary" />
    </div>
  );
};

export default SignupContainer;
