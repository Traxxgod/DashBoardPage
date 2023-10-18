import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 6],
  ["Sleep", 7], 
];

export const options = {
  title: `Customer that buy products`,
  pieHole: 0.4,
  is3D: false,
};

export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="80%"
      data={data}
      options={options}
    />
  );
}