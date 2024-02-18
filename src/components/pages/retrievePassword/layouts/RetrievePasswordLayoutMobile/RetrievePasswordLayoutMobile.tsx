import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./RetrievePasswordLayoutMobile.module.scss";
import RetrievePasswordForm from "../../components/retrievePasswordForm";

const RetrievePasswordLayoutMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.retrievePasswordMobile}>
        <div className={styles.content}>
          <RetrievePasswordForm />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[
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

export default RetrievePasswordLayoutMobile;
