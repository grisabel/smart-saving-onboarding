import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import ErrorMsg from "@/components/stories/molecules/ErrorMsg";

const RetrievePasswordErrorDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/error/error.svg",
        alt: "retrievePassword",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="question" />, isCompleted: true },
            { icon: <Icon name="email-send" />, hasError: true },
            { isTransited: false, icon: <Icon name="lock" /> },
          ]}
        ></LineStep>
      }
      form={<ErrorMsg />}
    />
  );
};

export default RetrievePasswordErrorDesktop;
