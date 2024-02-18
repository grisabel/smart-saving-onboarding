import React from "react";

import RetrievePasswordForm from "../../components/retrievePasswordContainer/components/retrievePasswordForm";
import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./RetrievePasswordLayoutMobile.module.scss";

const RetrievePasswordLayoutMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.retrievePasswordMobile}>
        <RetrievePasswordForm />
        <DotStep
          steps={[
            { isTransited: true },
            { isTransited: false },
            { isTransited: false },
          ]}
        ></DotStep>
      </div>
    </LayoutMobile>
  );
};

export default RetrievePasswordLayoutMobile;
