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

const BarChartComponent = ({ xAxisData, seriesData,showLabels, showLegendWithColors}) => {
 
 
  console.log(" xAxisData, seriesData", xAxisData,  seriesData,)
 let xData =  ([{data:"YouWaah Day", color:"red"},{data:"Cancer Cruseders", color:"green"}])
  return (
    <>
    {!showLabels && 
    
    <BarChart
    xAxis={[
      {
        scaleType: "band",
        data: xAxisData, // Use xAxisData for x-axis labels
        tickLabelStyle: {
          fontSize: 10, // Increase X-axis label font size
          fontWeight: "bold",
          fill: "#333", // Optional: Adjust color
        },
      },
    ]}
      yAxis={[
              { max: 40,min: 0 } ]}
              series={seriesData?.map((item, index) => ({
                         ...item,
                           label:  item.label ,
                          backgroundColor: item.color ,
}))}      sx={{ width: 1600, height: 600 }} // Increased width & height
      
    />}
  

{showLegendWithColors && (
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {xData?.map((item, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  backgroundColor: item.color || "gray", // Use color from data
                  marginRight: "5px",
                }}
              />
              <span>{item.data}</span>
            </div>
          ))}
        </div>
      )}
  
    </>
  );
};

export default BarChartComponent;









// import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const BarChartComponent = ({ xAxisData, seriesData, showLabels, showLegendWithColors }) => {
//   console.log("xAxisData:", xAxisData);
//   console.log("seriesData:", seriesData)
  
  
  
//   return (
//     <div>
          

//           {/* <BarChart
//       xAxis={[{ scaleType: "band", data: xAxisData, tickLabelStyle: { fontSize: 10 } }]}
//       yAxis={[
//               {     max: 50,min: 0 } ]}
//               series={seriesData.map((item, index) => ({
//                          ...item,
//                            label:  item.label || "",
//                            backgroundColor: item.color|| "grey" ,
//                        }))}      sx={{ width: 1600, height: 600 }} // Increased width & height
      
//     /> */}


// <BarChart
//   xAxis={[{ scaleType: "band", data: xAxisData, tickLabelStyle: { fontSize: 10 } }]}

//   yAxis={[
//                  {     max: 50,min: 0 } ]}
//                 series={seriesData.map((item, index) => ({
//                            ...item,
//                               label: showLabels ? item.label : "",
//                             backgroundColor: item.color ,
//  }))}     
//   sx={{ width: 1600, height: 600 }}
// />




//       {showLegendWithColors && (
//         <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
//           {seriesData.map((item, index) => (
//             <div key={index} style={{ display: "flex", alignItems: "center" }}>
//               <div
//                 style={{
//                   width: "12px",
//                   height: "12px",
//                   backgroundColor: item.color || "gray", // Use color from data
//                   marginRight: "5px",
//                 }}
//               />
//               <span>{item.label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BarChartComponent;



// import React from "react";
// import { BarChart } from "@mui/x-charts/BarChart";

// const BarChartComponent = ({ xAxisData, seriesData, showLegendWithColors  }) => {
// console.log("ccc", xAxisData, seriesData, showLegendWithColors  )



//   return (
//     <div style={{ width: "100%", maxWidth: "1600px", margin: "auto" }}>
//       <BarChart
//         xAxis={[{ scaleType: "band", data: seriesData, tickLabelStyle: { fontSize: 12 } }]}
//         yAxis={[{ max: 50, min: 0 }]}
//         series={seriesData.map((item) => ({
//           data: item.data,
//           label: item.label,
//           color: item.color || "gray",
//         }))}
//         sx={{ width: "100%", height: 600 }} // Makes chart responsive
//       />

//       {/* Legend (Optional) */}
//       {showLegendWithColors && (
//         <div style={{ display: "flex", gap: "15px", marginTop: "15px", justifyContent: "center" }}>
//           {seriesData.map((item, index) => (
//             <div key={index} style={{ display: "flex", alignItems: "center" }}>
//               <div
//                 style={{
//                   width: "12px",
//                   height: "12px",
//                   backgroundColor: item.color || "gray",
//                   marginRight: "5px",
//                 }}
//               />
//               <span>{item.label}</span>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default BarChartComponent;
