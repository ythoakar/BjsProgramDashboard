import React from "react";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useDropdown } from "../../Service/DropdownProvider";
import axios from "axios";
import SEC_Div from "../../Components/DashBoard_Components/SEC_Div";
import CommitteeCard from "../../CommonComponent/CommitteeCard/CommitteeCard";
import { Button } from "@mui/material";
import StatsCard from "../../CommonComponent/StatsCard/StatsCard";

const Dashboard = () => {
  const { selectedOption } = useDropdown(); // Get selected option
  const [allUserData, setAllUserData] = useState([]);

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

  }, []);
  console.log("iddd ", selectedOption)

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
        {/* <div className="col-1-child child-25">
          <CommitteeCard heading="Regional Executive Committee" number={28} />
        </div>
        <div className="col-1-child child-25">
          <CommitteeCard heading="District Executive Committee" number={23} />
        </div> */}

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
          <StatsCard heading="Total Chapters" number={878} />
          <StatsCard heading="Vibrant Chapters" number={221} />
          <StatsCard heading="Aspiratinal Chapters" number={878} />
        </div>
        <div className="col-2-child child-30">Second div (30%)</div>
        <div className="col-2-child child-30">Third div (30%)</div>
        <div className="col-2-child child-10">Instructions</div>
      </div>

      {/* Third column: 35% width */}
      {/* <div className="col col-3">
        <div className="col-3-child child-40">First div (40%)</div>
        <div className="col-3-child child-30">
          <h3>Water Team</h3>  
          {allUserData && <SEC_Div data={allUserData} />}
        </div>
        <div className="col-3-child child-30">
          <h3>Mulyavardhan Team </h3>  

          {allUserData && <SEC_Div data={allUserData} />}
        </div>
      </div> */}

      <div className="col col-3">
        <div className="col-3-child child-40">First div (40%)</div>

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
