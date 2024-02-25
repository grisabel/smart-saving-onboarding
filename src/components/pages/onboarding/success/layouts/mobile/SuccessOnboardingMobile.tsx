import React from "react";

import LayoutMobile from "@/components/stories/templates/LayoutMobile";

import styles from "./SuccessOnboardingMobile.module.scss";
import DotStep from "@/components/stories/atoms/Steps/DotStep";
import Success from "../desktop/components/SuccessOnboarding";

function SuccessOnboardingMobile() {
  return (
    <LayoutMobile>
      <div className={styles.success}>
        <div className={styles.content}>
          <Success />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: false },
              { isTransited: false },
              { isTransited: false },
              { isTransited: true },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
}

export default SuccessOnboardingMobile;
