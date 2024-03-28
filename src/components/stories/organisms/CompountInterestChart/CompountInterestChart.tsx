import { CompountInterestResponseModel } from "@/repository/CaclculatorRepository/model/response/CompountInterestResponseModel";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AreaChart,
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
} from "recharts";

const formatCurrency = (value: string) => {
  const f = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return `${f.format(parseFloat(value))}`;
};


interface CompountInterestChartProps{
  data: CompountInterestResponseModel[]
}

const CompountInterestChart: React.FC<CompountInterestChartProps> = ({data}) => {
  const {t} = useTranslation();

  const formatYear = (value: string) => `${t("year")}: ${value}`

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={300}
        data={data.map((d, i) => {
          return {
            ...d,
            name: i + 1
          }
        })}
        margin={{
          top: 20,
          right: 50,
          left: 8,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis orientation="right" tickFormatter={formatCurrency} />
        <Tooltip formatter={formatCurrency} labelFormatter={formatYear} />
        <Legend />
        <Area
          type="monotone"
          dataKey="initialCapital"
          stackId="a"
          fill="#FCAE38"
          name={t("initialCapital")}
        />
        <Area
          type="monotone"
          dataKey="contribution"
          stackId="a"
          fill="#0AA347"
          name={t("contribution")}
        />
        <Area
          type="monotone"
          dataKey="interest"
          stackId="a"
          fill="#11ADEF"
          name={t("interest")}
        />
        <Area
          type="monotone"
          dataKey="totalCapital"
          stackId="b"
          fill="transparent"
          name={t("totalCapital")}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CompountInterestChart;
