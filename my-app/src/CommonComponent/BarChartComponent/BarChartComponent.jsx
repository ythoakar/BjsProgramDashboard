// import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const BarChartComponent = ({ xAxisData, seriesData }) => {
//   console.log("bar data ", xAxisData, seriesData);

//   return (
//     <BarChart
//       xAxis={[
//         {
//           scaleType: "band",
//           data: xAxisData,
//           tickLabelStyle: {
//             fontSize: 10, // Increase X-axis label font size
//             fontWeight: "bold",
//             fill: "#333", // Optional: Adjust color
//           },
//         },
//       ]}
//       yAxis={[
//         {
//           max: 50,
//           min: 0,
//           tickLabelStyle: {
//             fontSize: 10, // Increase Y-axis label font size
//             fontWeight: "bold",
//             fill: "#333", // Optional: Adjust color
//           },
//         },
//       ]}
//       series={seriesData}
    
//     />
//   );
// };

// export default BarChartComponent;



import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

const BarChartComponent = ({ xAxisData, seriesData}) => {
  return (
    <BarChart
      xAxis={[{ scaleType: "band", data: xAxisData, tickLabelStyle: { fontSize: 10 } }]}
      yAxis={[
              {     max: 50,min: 0 } ]}
      series={seriesData}
      sx={{ width: 1600, height: 600 }} // Increased width & height
      
    />
  );
};

export default BarChartComponent;

