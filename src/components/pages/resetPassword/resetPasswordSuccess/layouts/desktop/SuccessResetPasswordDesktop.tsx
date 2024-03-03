import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import Success from "../../components/SuccessResetPassword/Success";

const SuccessResetPasswordDesktop: React.FC = () => {
  return (
    <LayoutStepDesktop
      image={{
        src: "/images/retrievePassword/retrivePasswordEmailSentPage.svg",
        alt: "retrievePassword",
      }}
      step={
        <LineStep
          steps={[
            { icon: <Icon name="question" />, isCompleted: true },
            { icon: <Icon name="email-send" />, isCompleted: true },
            { icon: <Icon name="lock" />, isCompleted: true },
          ]}
        ></LineStep>
      }
      form={<Success />}
    />
  );
};

export default SuccessResetPasswordDesktop;
