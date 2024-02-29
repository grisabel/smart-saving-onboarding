import React, { createContext, useContext, useState } from "react";

interface OnboardingContextInterface {
  email: string;
  setEmail: (value: string) => void;
}

const OnboardingContext = createContext<OnboardingContextInterface | null>(
  null
);

const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");

  const context = {
    email,
    setEmail,
  };

  return (
    <OnboardingContext.Provider value={context}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingCtx = (): OnboardingContextInterface => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error(
      "useOnboardingCtx must be used within a OnboardingProvider"
    );
  }
  return context;
};

export default OnboardingProvider;
