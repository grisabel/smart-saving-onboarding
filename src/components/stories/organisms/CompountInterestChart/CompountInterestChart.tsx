import { CompountInterestResponseModel } from "@/repository/CaclculatorRepository/model/response/CompountInterestResponseModel";
import React, { useState } from "react";
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

const formatYear = (value: string) => `Año: ${value}`

interface CompountInterestChartProps{
  data: CompountInterestResponseModel[]
}

const CompountInterestChart: React.FC<CompountInterestChartProps> = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={300}
        data={data}
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
          name="Aportación Inicial"
        />
        <Area
          type="monotone"
          dataKey="contribution"
          stackId="a"
          fill="#0AA347"
          name="Aportación Anual"
        />
        <Area
          type="monotone"
          dataKey="interest"
          stackId="a"
          fill="#11ADEF"
          name="Interés"
        />
        <Area
          type="monotone"
          dataKey="totalCapital"
          stackId="b"
          fill="transparent"
          name="Capital Total"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CompountInterestChart;
