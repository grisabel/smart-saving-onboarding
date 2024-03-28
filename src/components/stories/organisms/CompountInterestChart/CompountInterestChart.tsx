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

const pageData = [
  {
    totalCapital: "11500.00",
    initialCapital: "10000.00",
    contribution: "1000.00",
    interest: "500.00",
  },
  {
    totalCapital: "13075.00",
    initialCapital: "10000.00",
    contribution: "2000.00",
    interest: "1075.00",
  },
  {
    totalCapital: "14728.75",
    initialCapital: "10000.00",
    contribution: "3000.00",
    interest: "1728.75",
  },
  {
    totalCapital: "16465.19",
    initialCapital: "10000.00",
    contribution: "4000.00",
    interest: "2465.19",
  },
  {
    totalCapital: "18288.45",
    initialCapital: "10000.00",
    contribution: "5000.00",
    interest: "3288.45",
  },
  {
    totalCapital: "20202.87",
    initialCapital: "10000.00",
    contribution: "6000.00",
    interest: "4202.87",
  },
  {
    totalCapital: "22213.01",
    initialCapital: "10000.00",
    contribution: "7000.00",
    interest: "5213.01",
  },
  {
    totalCapital: "24323.66",
    initialCapital: "10000.00",
    contribution: "8000.00",
    interest: "6323.66",
  },
  {
    totalCapital: "26539.85",
    initialCapital: "10000.00",
    contribution: "9000.00",
    interest: "7539.85",
  },
  {
    totalCapital: "28866.84",
    initialCapital: "10000.00",
    contribution: "10000.00",
    interest: "8866.84",
  },
  {
    totalCapital: "31310.18",
    initialCapital: "10000.00",
    contribution: "11000.00",
    interest: "10310.18",
  },
  {
    totalCapital: "33875.69",
    initialCapital: "10000.00",
    contribution: "12000.00",
    interest: "11875.69",
  },
  {
    totalCapital: "36569.47",
    initialCapital: "10000.00",
    contribution: "13000.00",
    interest: "13569.47",
  },
  {
    totalCapital: "39397.95",
    initialCapital: "10000.00",
    contribution: "14000.00",
    interest: "15397.95",
  },
  {
    totalCapital: "42367.85",
    initialCapital: "10000.00",
    contribution: "15000.00",
    interest: "17367.85",
  },
  {
    totalCapital: "45486.24",
    initialCapital: "10000.00",
    contribution: "16000.00",
    interest: "19486.24",
  },
  {
    totalCapital: "48760.55",
    initialCapital: "10000.00",
    contribution: "17000.00",
    interest: "21760.55",
  },
  {
    totalCapital: "52198.58",
    initialCapital: "10000.00",
    contribution: "18000.00",
    interest: "24198.58",
  },
  {
    totalCapital: "55808.51",
    initialCapital: "10000.00",
    contribution: "19000.00",
    interest: "26808.51",
  },
  {
    totalCapital: "59598.93",
    initialCapital: "10000.00",
    contribution: "20000.00",
    interest: "29598.93",
  },
  {
    totalCapital: "63578.88",
    initialCapital: "10000.00",
    contribution: "21000.00",
    interest: "32578.88",
  },
  {
    totalCapital: "67757.82",
    initialCapital: "10000.00",
    contribution: "22000.00",
    interest: "35757.82",
  },
  {
    totalCapital: "72145.71",
    initialCapital: "10000.00",
    contribution: "23000.00",
    interest: "39145.71",
  },
  {
    totalCapital: "76753.00",
    initialCapital: "10000.00",
    contribution: "24000.00",
    interest: "42753.00",
  },
  {
    totalCapital: "81590.65",
    initialCapital: "10000.00",
    contribution: "25000.00",
    interest: "46590.65",
  },
  {
    totalCapital: "86670.18",
    initialCapital: "10000.00",
    contribution: "26000.00",
    interest: "50670.18",
  },
  {
    totalCapital: "92003.69",
    initialCapital: "10000.00",
    contribution: "27000.00",
    interest: "55003.69",
  },
  {
    totalCapital: "97603.87",
    initialCapital: "10000.00",
    contribution: "28000.00",
    interest: "59603.87",
  },
  {
    totalCapital: "103484.07",
    initialCapital: "10000.00",
    contribution: "29000.00",
    interest: "64484.07",
  },
  {
    totalCapital: "109658.27",
    initialCapital: "10000.00",
    contribution: "30000.00",
    interest: "69658.27",
  },
];

const formatCurrency = (value: string) => {
  const f = new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  });

  return `${f.format(parseFloat(value))}`;
};

const formatYear = (value: string) => `Año: ${value}`

const CompountInterestChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={300}
        data={pageData.map((p, i) => {
          return {
            ...p,
            name: `${i + 1}`,
          };
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
