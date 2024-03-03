import React, { createContext, useContext, useState } from "react";

interface ForgotPasswordContextInterface {
  email: string;

  setEmail: (value: string) => void;
}

const ForgotPasswordContext =
  createContext<ForgotPasswordContextInterface | null>(null);

const ForgotPasswordProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [email, setEmail] = useState<string>("");

  const context = {
    email,
    setEmail,
  };

  return (
    <ForgotPasswordContext.Provider value={context}>
      {children}
    </ForgotPasswordContext.Provider>
  );
};

export const useForgotPasswordCtx = (): ForgotPasswordContextInterface => {
  const context = useContext(ForgotPasswordContext);
  if (!context) {
    throw new Error(
      "useForgotPasswordCtx must be used within a ForgotPasswordProvider"
    );
  }
  return context;
};

export default ForgotPasswordProvider;
