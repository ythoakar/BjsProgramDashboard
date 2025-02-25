import React from "react";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useDropdown } from "../../Service/DropdownProvider";
import axios from "axios";
import SEC_Div from "../../Components/DashBoard_Components/SEC_Div";
import CommitteeCard from "../../CommonComponent/CommitteeCard/CommitteeCard";
import { Button } from "@mui/material";
import { Image } from "antd";
import StatsCard from "../../CommonComponent/StatsCard/StatsCard";
import states from "../../../src/Data/States.json"

import India from "../../../src/imgs/INDIA.jpg"
import JsonData from "../../../src/Data/volunteerMTestDb.dashboardData.json";
import { BarChart } from '@mui/x-charts/BarChart';
import BarChartComponent from "../../CommonComponent/BarChartComponent/BarChartComponent";

const Dashboard = () => {
  const { selectedOption } = useDropdown(); // Get selected option
  const [allUserData, setAllUserData] = useState([]);
  const [selectedStat, setSelectedStat] = useState("");
  const [mapImgUrl, setMapImgUrl] = useState(India);

  useEffect(() => {
    const stateData = states.find(state => state.BjsStateName === selectedStat);
    setMapImgUrl(stateData ? stateData.mapImg : India);
  }, [selectedStat]);
  const [chapterStatus, setChapterStatus] = useState({
    Active:0, inActive: 0
  })

  async function getAllData() {
    try {
      let response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/misOfficeBearerUserList`
      );

      console.log("response ", response);
      setAllUserData(response.data);
    } catch (err) {
      console.log("Error occured in All Data ", err);
    }
  }

  useEffect(() => {
    getAllData();

    countStatus();

  }, []);
  console.log("iddd ", selectedOption)
  const selectedState = states.find(state => state.BjsStateName === allUserData);



  
  function countStatus() {
    let aspirationalChapters = { Active: 0, inActive: 0 };
  
    JsonData.forEach(item => {
      if (item.activeInactiveStatus === "Active") {
        aspirationalChapters.Active++;
      } else if (item.activeInactiveStatus === "Inactive") {
        aspirationalChapters.inActive++;
      }
    });
  console.log("checkStatus  ", aspirationalChapters )
    setChapterStatus(aspirationalChapters); // Update state with the count
  }
  



  const xAxisData = ["group A", "group B", "group C"];
  const seriesData = [
    { data: [4, 3, 5], label: "Dataset 1" },
    { data: [1, 6, 3], label: "Dataset 2" },
    { data: [2, 5, 6], label: "Dataset 3" }
  ];
  


  return (
    <div className="dashboard-container">
      {/* First column: 25% width */}
      <div className="col col-1">
        <div className="col-1-child child-50">
          {allUserData && (
            <SEC_Div
              data={allUserData}
              heading="National Executive Committee"
            />
          )}
        </div>
       

        <div className="col-1-child child-50">
          {allUserData && (
            <SEC_Div data={allUserData} heading="State Executive Committee" />
          )}
        </div>

        <div className="col-1-child child-50">
          {allUserData && (
            <SEC_Div data={allUserData} heading="Region Executive Committee" />
          )}
        </div>

        <div className="col-1-child child-50">
          {allUserData && (
            <SEC_Div
              data={allUserData}
              heading="District Executive Committee"
            />
          )}
        </div>
      </div>

      {/* Second column: 40% width */}
      <div className="col col-2">
        <div className="col-2-child child-20">
          <StatsCard heading="Total Chapters" number={JsonData.length} />
          <StatsCard heading="Vibrant Chapters" number={chapterStatus.Active} />
          <StatsCard heading="Aspiratinal Chapters" number={chapterStatus.inActive} />
        </div>
        <div className="col-2-child child-30">
        <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} />



        </div>
        <div className="col-2-child child-30">

        <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} />


        </div>
        <div className="col-2-child child-10">Instructions</div>
      </div>

   

{/* <div className="col col-3">
    <div className="col-3-child child-40">
          {allUserData && (<Image src={mapImgUrl}alt="Map Image" style={{maxHeight: "250px"}}/>)}
        </div>
      </div>  */}

<div className="col col-3">
    <div className="col-3-child child-40">
          {allUserData && (<Image src={mapImgUrl}alt="Map Image" style={{maxHeight: "250px"}}/>)}
          {/* <Image src={states[0].mapImg} alt="Map Image" style={{ maxHeight: "250px" }} /> */}
        </div>

        <div className="col-3-child child-50">
          <h3>Water Team</h3>
          {allUserData && (
            <CommitteeCard
              data={allUserData}
              heading="District Executive Committee"
            />
          )}
        </div>

        <div className="col-3-child child-50">
          <h3>Mulyavardhan Team</h3>
          {allUserData && (
            <CommitteeCard
              data={allUserData}
              heading="District Executive Committee"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
