import { CompountInterestResponseModel } from "@/repository/CaclculatorRepository/model/response/CompountInterestResponseModel";
import React, { createContext, useContext, useState } from "react";

interface CompountInterestContextInterface {
  annualContribution: number |null,
  setAnnualContribution: (value: number |null) => void,

  initialCapital: number |null,
  setInitialCapital: (value: number |null) => void,

  period: number |null,
  setPeriod:(value: number |null) => void,

  rateInterest: number |null,
  setRateInterest:(value: number |null) => void,

  data: CompountInterestResponseModel[] | null
  setData: (value: CompountInterestResponseModel[] |null) => void
}

const CompountInterestContext = createContext<CompountInterestContextInterface | null>(
  null
);

const CompountInterestProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [annualContribution, setAnnualContribution] = useState<number | null>(
    null
  );
  const [initialCapital, setInitialCapital] = useState<number | null>(null);
  const [period, setPeriod] = useState<number | null>(null);
  const [rateInterest, setRateInterest] = useState<number | null>(null);

  const [data, setData] = useState<CompountInterestResponseModel[] | null>(null);


  const context = {
    annualContribution,
    setAnnualContribution,

    initialCapital,
    setInitialCapital,

    period,
    setPeriod,

    rateInterest,
    setRateInterest,

    data,
    setData
  };

  return (
    <CompountInterestContext.Provider value={context}>
      {children}
    </CompountInterestContext.Provider>
  );
};

export const useCompountInterestCtx = (): CompountInterestContextInterface => {
  const context = useContext(CompountInterestContext);
  if (!context) {
    throw new Error(
      "useCompountInterestCtx must be used within a CompountInterestProvider"
    );
  }
  return context;
};

export default CompountInterestProvider;
