import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./PasswordOnboardingMobile.module.scss";
import PasswordOnboardingForm from "../../components/PasswordOnboardingForm";

const PasswordOnboardingMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.dataOnboarding}>
        <div className={styles.content}>
          <PasswordOnboardingForm />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: false },
              { isTransited: false },
              { isTransited: true },
              { isTransited: false },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
};

export default PasswordOnboardingMobile;
