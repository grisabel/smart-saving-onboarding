import React, { createContext, useContext } from "react";

const OnboardingContext = createContext(null);

const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <OnboardingContext.Provider value={null}>
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboardingCtx = () => {
  const context = useContext(OnboardingContext);
  if (context === undefined) {
    throw new Error(
      "useOnboardingCtx must be used within a OnboardingProvider"
    );
  }
  return context;
};

export default OnboardingProvider;
