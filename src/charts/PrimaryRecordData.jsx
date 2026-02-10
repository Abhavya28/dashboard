import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "JAN/23", blue: 23000, grey: 43000, line: 43000 },
  { month: "FEB/23", blue: 11000, grey: 54000, line: 54000 },
  { month: "MAR/23", blue: 22000, grey: 41000, line: 41000 },
  { month: "APR/23", blue: 27000, grey: 66000, line: 66000 },
  { month: "MAY/23", blue: 13000, grey: 22000, line: 22000 },
  { month: "JUN/23", blue: 22000, grey: 42000, line: 42000 },
  { month: "JUL/23", blue: 36000, grey: 21000, line: 21000 },
  { month: "AUG/23", blue: 21000, grey: 40000, line: 40000 },
  { month: "SEP/23", blue: 44000, grey: 56000, line: 56000 },
  { month: "OCT/23", blue: 22000, grey: 27000, line: 27000 },
  { month: "NOV/23", blue: 30000, grey: 42000, line: 42000 },
  { month: "DEC/23", blue: 21000, grey: 41000, line: 41000 },
];

const PrimaryRecordData = () => {
  return (
    <div className="w-full h-[360px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="30%" barGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />

          <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />

          <YAxis
            domain={[0, 70000]}
            ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000, 70000]}
            tick={{ fontSize: 12, fill: "#94a3b8" }}
            tickFormatter={(v) => `${v / 1000}K`}
          />

          <Tooltip cursor={{ fill: "transparent" }} />

          {/* Blue bar (right) */}
          <Bar
            dataKey="blue"
            fill="#3454D1"
            barSize={14}
            radius={[8, 8, 8, 8]}
          />

          {/* Grey bar (left) */}
          <Bar
            dataKey="grey"
            fill="#E5E7EB"
            barSize={14}
            radius={[8, 8, 8, 8]}
            activeBar={{ fill: "#F1F5F9" }}
          />

          {/* Line on top */}
          <Line
            type="monotone"
            dataKey="line"
            stroke="#CBD5E1"
            strokeWidth={1}
            dot={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PrimaryRecordData;
