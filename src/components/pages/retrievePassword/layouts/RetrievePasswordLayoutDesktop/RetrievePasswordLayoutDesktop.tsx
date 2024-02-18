import React from "react";

import RetrievePasswordContainer from "../../components/retrievePasswordContainer/retrievePasswordContainer";
import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import styles from "./RetrievePasswordLayoutDesktop.module.scss";

const RetrievePasswordLayoutDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/retrievePassword/retrievePassword_1.svg",
        alt: "retrievePassword",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="question" />, isCompleted: true },
            { isTransited: false, icon: <Icon name="email-send" /> },
            { isTransited: false, icon: <Icon name="lock" /> },
          ]}
        ></LineStep>
      }
      form={<RetrievePasswordContainer />}
    />
  );
};

export default RetrievePasswordLayoutDesktop;
