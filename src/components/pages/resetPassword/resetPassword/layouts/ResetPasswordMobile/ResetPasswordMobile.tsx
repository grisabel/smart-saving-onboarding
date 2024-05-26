import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./ResetPasswordMobile.module.scss";
import ResetPasswordForm from "../../components/ResetPasswordForm";

const ResetPasswordMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.resetPasswordMobile}>
        <div className={styles.content}>
          <ResetPasswordForm />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
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

export default ResetPasswordMobile;
