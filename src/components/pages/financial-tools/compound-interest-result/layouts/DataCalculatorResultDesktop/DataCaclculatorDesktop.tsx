import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import DataCalculatorResult from "../../components/DataCalculatorResult/DataCalculatorResult";

import styles from "./DataCaclculatorDesktop.module.scss"

const DataCalculatorResultDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      step={
        <LineStep
        className={styles.LineStepCalculatorResul}
          steps={[
            {
              isTransited: true,
              icon: <Icon name="form" />,
              isCompleted: true,
            },
            { isTransited: true, icon: <Icon name="chart" />, isCompleted: true },
          ]}
        ></LineStep>
      }
      form={<DataCalculatorResult />}
    />
  );
};

export default DataCalculatorResultDesktop;
