import React from "react";
import { useTranslation } from "react-i18next";

import LayoutMobile from "@/components/stories/templates/LayoutMobile";
import styles from "./ErrorOnboardingMobile.module.scss";
import DotStep from "@/components/stories/atoms/Steps/DotStep";
import ErrorMsg from "@/components/stories/molecules/ErrorMsg";

function ErrorOnboardingMobile() {
  const { t } = useTranslation();
  return (
    <LayoutMobile>
      <div className={styles.success}>
        <div className={styles.content}>
          <ErrorMsg />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: false },
              { isTransited: false },
              { isTransited: false },
              { hasError: true },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
}

export default ErrorOnboardingMobile;
