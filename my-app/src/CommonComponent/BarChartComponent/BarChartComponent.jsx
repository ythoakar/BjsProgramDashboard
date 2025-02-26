import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarChartComponent = ({ xAxisData, seriesData, width = "100%", height = "100%" }) => {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: xAxisData }]}
      series={seriesData}
      sx={{ width, height }}
      yAxis={[{ max: 50, min: 0 }]}
    />
  );
};

export default BarChartComponent;
