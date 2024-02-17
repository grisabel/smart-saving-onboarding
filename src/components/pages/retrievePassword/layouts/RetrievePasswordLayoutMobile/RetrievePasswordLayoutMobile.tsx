import React from "react";
import styles from "./RetrievePasswordLayoutMobile.module.scss";

import LoginContainer from "../../../login/components/LoginContainer";
import SignupContainer from "../../../login/components/SignupContainer";

const RetrievePasswordLayoutMobile: React.FC = () => {
  return (
    <div className={styles.retrievePasswordMobile}>
      <LoginContainer />
      <SignupContainer />
    </div>
  );
};

export default RetrievePasswordLayoutMobile;
