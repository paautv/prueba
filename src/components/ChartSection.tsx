import { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function ChartSection() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("assets/data/charts.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#1976d2" />
      </LineChart>
    </ResponsiveContainer>
  );
}
