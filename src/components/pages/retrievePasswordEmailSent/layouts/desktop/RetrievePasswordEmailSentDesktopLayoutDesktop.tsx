import React from "react";

import LayoutStepDesktop from "@/components/stories/templates/LayoutStepDesktop";
import LineStep from "@/components/stories/atoms/Steps/LineStep";
import Icon from "@/components/stories/atoms/Icon";
import EmailSendtSucess from "./components/EmailSentSuccess/EmailSendtSucess";

const RetrievePasswordEmailSentDesktop: React.FC = () => {
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
            { isTransited: false, icon: <Icon name="lock" /> },
          ]}
        ></LineStep>
      }
      form={<EmailSendtSucess />}
    />
  );
};

export default RetrievePasswordEmailSentDesktop;
