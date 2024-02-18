import React from "react";
import { t } from "i18next";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";

import styles from "./RetrievePasswordEmailSentDesktopLayoutDesktop.module.scss";

const RetrievePasswordEmailSentDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/retrievePassword/retrivePasswordEmailSentPage.svg",
        alt: "retrievePassword",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="question" />, isCompleted: true },
            { icon: <Icon name="email-send" />, isCompleted: true },
            { isTransited: false, icon: <Icon name="lock" /> },
          ]}
        ></LineStep>
      }
      form={
        <div className={styles.text}>
          <div>
            <p className={styles.text__bold}>{`${t("sent-email")} XXXXXX`}</p>
            <p className={styles.text__thin}>{t("sent-email-success")}</p>
          </div>
          <p className={styles.text__bold}>{t("take-control")}</p>
        </div>
      }
    />
  );
};

export default RetrievePasswordEmailSentDesktop;
