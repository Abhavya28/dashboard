import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";

const data = [
  { name: "New", value: 20 },
  { name: "Contacted", value: 15 },
  { name: "Qualified", value: 10 },
  { name: "Working", value: 18 },
  { name: "Customer", value: 10 },
  { name: "Proposal", value: 15 },
  { name: "Leads", value: 16 },
  { name: "Progress", value: 14 },
  { name: "Others", value: 10 },
];

const COLORS = [
  "#3B5BDB",
  "#0B5ED7",
  "#1971C2",
  "#228BE6",
  "#339AF0",
  "#4DABF7",
  "#74C0FC",
  "#A5D8FF",
  "#D0EBFF",
];

/* Custom tooltip */
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg px-4 py-2 text-sm">
        <p className="font-semibold text-primary">
          {payload[0].name}
        </p>
        <p className="text-darkgreytone">
          {payload[0].value}K Leads
        </p>
      </div>
    );
  }
  return null;
};

const LeadsDonutChart = () => {
  return (
    <div className="w-full">
      <div className="w-full h-[280px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={110}
              paddingAngle={2}
            >
              {data.map((_, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadsDonutChart;
