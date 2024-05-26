import React from "react";
import Image from "next/image";

import LayoutMobile from "@/components/stories/templates/LayoutMobile";

import styles from "./RetrievePasswordErrorMobile.module.scss";
import ErrorMsg from "@/components/stories/molecules/ErrorMsg";
import DotStep from "@/components/stories/atoms/Steps/DotStep";

function RetrievePasswordErrorMobile() {
  return (
    <LayoutMobile>
      <div className={styles.container}>
        <ErrorMsg />
        <div className={styles.steps}>
          <DotStep
            steps={[
              { isTransited: false },
              { hasError: true },
              { isTransited: false },
            ]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
}

export default RetrievePasswordErrorMobile;
