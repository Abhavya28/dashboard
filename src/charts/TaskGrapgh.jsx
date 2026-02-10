import React from "react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Mon", tasks: 40 },
  { name: "Tue", tasks: 52 },
  { name: "Wed", tasks: 60 },
  { name: "Thu", tasks: 48 },
  { name: "Fri", tasks: 70 },
  { name: "Sat", tasks: 55 },
  { name: "Sun", tasks: 45 },
];

const CustomTooltip = ({ active, payload, label, color }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-md rounded-lg px-4 py-3 text-sm">
        <p className="text-gray-400 mb-2">{label}</p>

        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: color }}
          />
          <span className="text-gray-600">
            Task Completed:{" "}
            <b className="text-gray-900">{payload[0].value} Tasks</b>
          </span>
        </div>
      </div>
    );
  }
  return null;
};

const TaskGraph = ({
  strokeColor = "#3B5BDB",
  fillColor = "rgba(59,91,219,0.15)",
}) => {
  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis hide />
          <YAxis hide />

          <Tooltip
            content={<CustomTooltip color={strokeColor} />}
            cursor={{ strokeDasharray: "3 3", stroke: "#9CA3AF" }}
          />

          <Area
            type="monotone"
            dataKey="tasks"
            stroke={strokeColor}
            strokeWidth={2.5}
            fill={fillColor}
            dot={false}
            activeDot={{
              r: 6,
              fill: strokeColor,
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TaskGraph;
