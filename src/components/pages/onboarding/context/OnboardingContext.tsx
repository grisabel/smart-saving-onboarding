import React, { createContext, useContext, useState } from "react";

interface OnboardingContextInterface {
  firstName: string;
  lastName: string;
  dateBirth: string;
  objetive: string;
  email: string;
  password: string;

  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
  setDateBirth: (value: string) => void;
  setObjetive: (value: string) => void;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
}

const OnboardingContext = createContext<OnboardingContextInterface | null>(
  null
);

const OnboardingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dateBirth, setDateBirth] = useState<string>("");
  const [objetive, setObjetive] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const context = {
    firstName,
    setFirstName,

    lastName,
    setLastName,

    dateBirth,
    setDateBirth,

    objetive,
    setObjetive,

    email,
    setEmail,

    password,
    setPassword,
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
