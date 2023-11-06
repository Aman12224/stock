import React, { PureComponent, useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useGlobalContext } from "../components/Context";

const Graph = ({ data }) => {
  return (
    <BarChart width={600} height={450} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="symbol" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
      {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
    </BarChart>
  );
};

export default Graph;
