import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from "recharts";

const data = [
  { name: "1", value: 28 },
  { name: "2", value: 22 },
  { name: "3", value: 26 },
  { name: "4", value: 24 },
  { name: "5", value: 30 },
  { name: "6", value: 21 },
  { name: "7", value: 27 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black/80 text-white px-4 py-3 rounded-lg text-sm">
        <div>
          <p className="mb-2">{label}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-400"></span>
          <p>
            Total Sales: <b>{payload[0].value}K</b>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const TotalSales = () => {
  return (
    <div className="relative bg-[#3B5BDB] rounded-xl p-6 text-white h-[250px] overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h1 className="text-2xl font-bold">30,569</h1>
          <p className="text-sm opacity-80">Total Sales</p>
        </div>

        <div className="bg-white text-[#3B5BDB] text-xs font-semibold px-3 py-1 rounded-md">
          12%
        </div>
      </div>

      {/* Chart */}
      <div className="absolute bottom-0 left-0 w-full h-[120px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis hide />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ strokeDasharray: "3 3", stroke: "#fff" }}
            />

            <Area
              type="monotone"
              dataKey="value"
              stroke="#A5B4FC"
              strokeWidth={3}
              fill="rgba(255,255,255,0.25)"
              activeDot={{ r: 7 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalSales;
