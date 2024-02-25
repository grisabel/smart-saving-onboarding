import React from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

import Button from "../../atoms/Buttons/Button";
import styles from "./ErrorMsg.module.scss";

interface ErrorMsgProps {
  title?: string;
  content?: JSX.Element;
  button?: {
    onClick: () => void;
    label: string;
  };
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ title, content, button }) => {
  const { t } = useTranslation();

  const defaultContent = (
    <>
      <p className={styles.text__thin}>{t("team-working")}</p>
      <Image
        src="/images/error/error.svg"
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
        onClick={button?.onClick}
        label={button?.label ?? t("btn-return")}
        type="button"
        color="secondary"
      />
    </div>
  );
};

export default ErrorMsg;
