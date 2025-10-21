import React, { useState, useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Typography, Box } from "@mui/material";

interface ChartData {
  year: number;
  month_index: number;
  amount: number;
}

interface PerformanceChartProps {
  data: ChartData[];
}

const PerformanceChart: React.FC<PerformanceChartProps> = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState<"all" | number>("all");

  
  {/* Organizar datos */}
  const years = Array.from(new Set(data.map((d) => d.year))).sort((a, b) => a - b);

  const sortedData = useMemo(
    () => [...data].sort((a, b) => a.month_index - b.month_index),
    [data]
  );

  const filteredData =
    selectedYear === "all"
      ? sortedData
      : sortedData.filter((d) => d.year === selectedYear);

  return (
    <div>
      <Typography variant="h5" gutterBottom>Descripción del proyecto</Typography>

      {/* Elegir año/s */}
      <div style={{ marginBottom: "1rem" }}>
        <label style={{ marginRight: "0.5rem" }}>Mostrar datos de:</label>
        <select
          value={selectedYear}
          onChange={(e) =>
            setSelectedYear(
              e.target.value === "all" ? "all" : Number(e.target.value)
            )
          }
          style={{
            padding: "0.4rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="all">Todos los años</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      {/* Gráfica */}
      <Box sx={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis tickFormatter={(v) => v + 1} />
            <YAxis />
            <Tooltip />
            <Legend />

            {selectedYear === "all" ? (
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                strokeWidth={3}
                name="Todos los años"
              />
            ) : (
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#82ca9d"
                strokeWidth={3}
                name={String(selectedYear)}
              />
            )}
          </LineChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default PerformanceChart;
