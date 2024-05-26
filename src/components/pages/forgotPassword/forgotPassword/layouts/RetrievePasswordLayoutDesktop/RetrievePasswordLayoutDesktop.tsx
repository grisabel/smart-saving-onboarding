import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";

import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import RetrievePasswordForm from "../../components/retrievePasswordForm";

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
      form={<RetrievePasswordForm />}
    />
  );
};

export default RetrievePasswordLayoutDesktop;
