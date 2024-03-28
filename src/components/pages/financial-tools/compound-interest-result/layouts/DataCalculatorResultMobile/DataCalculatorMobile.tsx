import React from "react";

import DotStep from "@/components/stories/atoms/Steps/DotStep";
import LayoutMobile from "@/components/stories/templates/LayoutMobile/LayoutMobile";

import styles from "./DataCalculatorResultMobile.module.scss";
import DataCalculatorResult from "../../components/DataCalculatorResult/DataCalculatorResult";

const DataCalculatorResultLayoutMobile: React.FC = () => {
  return (
    <LayoutMobile>
      <div className={styles.dataOnboarding}>
        <div className={styles.content}>
          <DataCalculatorResult />
        </div>
        <div className={styles.steps}>
          <DotStep
            steps={[{ isTransited: true }, { isTransited: true }]}
          ></DotStep>
        </div>
      </div>
    </LayoutMobile>
  );
};

export default DataCalculatorResultLayoutMobile;
