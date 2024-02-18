import React from "react";

import styles from "./RetrievePasswordLayoutMobile.module.scss";
import Logo from "@/components/stories/atoms/Logo";
import RetrievePasswordForm from "../../components/retrievePasswordContainer/components/retrievePasswordForm";
import DotStep from "@/components/stories/atoms/Steps/DotStep";

const RetrievePasswordLayoutMobile: React.FC = () => {
  return (
    <div className={styles.retrievePasswordMobile}>
      <Logo />
      <RetrievePasswordForm />
      <DotStep
        steps={[
          { isTransited: true },
          { isTransited: false },
          { isTransited: false },
        ]}
      ></DotStep>
    </div>
  );
};

export default RetrievePasswordLayoutMobile;
