import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./EmailOnboardingMobile.module.scss";
import EmailOnboardingForm from "../../components/EmailOnboardingForm";

const EmailOnboardingMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.dataOnboarding}>
        <div className={styles.content}>
          <EmailOnboardingForm />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: false },
              { isTransited: true },
              { isTransited: false },
              { isTransited: false },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
};

export default EmailOnboardingMobile;
