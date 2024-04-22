import React from "react";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import router from "next/router";

import Button from "../../atoms/Buttons/Button";
import styles from "./ErrorMsg.module.scss";
import { ButtonProps } from "../../atoms/Buttons/Button/Button";

interface ErrorMsgProps {
  title?: string;
  content?: JSX.Element;
  button?: ButtonProps;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ title, content, button }) => {
  const { t } = useTranslation('common');

  const handleBack = () => {
    router.push("/login");
  };

  const defaultContent = (
    <>
      <p className={styles.text__thin}>{t("team-working")}</p>
      <Image
        src="/login/images/error/error.svg"
        alt="retrievePassword"
        layout="fill"
      ></Image>
      <p className={styles.text__thin}>{t("try-again-later")}</p>
    </>
  );
  return (
    <div className={styles.text}>
      <p className={styles.text__bold}>{title ?? t("error-password")}</p>
      {content ?? defaultContent}
      <Button
        label={t("btn-return")}
        type="button"
        color="secondary"
        onClick={handleBack}
        {...button}
      />
    </div>
  );
};

export default ErrorMsg;
