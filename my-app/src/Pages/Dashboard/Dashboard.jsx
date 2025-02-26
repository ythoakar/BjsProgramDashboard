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
import states from "../../../src/Data/States.json";

import India from "../../imgs/INDIA.jpg";
import JsonData from "../../../src/Data/volunteerMTestDb.dashboardData.json";
import { BarChart } from "@mui/x-charts/BarChart";
import BarChartComponent from "../../CommonComponent/BarChartComponent/BarChartComponent";
import FullscreenIcon from "@mui/icons-material/OpenInFull";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Dashboard = () => {
  const { selectedOption } = useDropdown(); // Get selected option
  const [allUserData, setAllUserData] = useState([]);
  const [mapImgUrl, setMapImgUrl] = useState(India);
  const [xAxisData, setXAxisData] = useState([]);
  const [seriesData, setSeriesData] = useState([]);
  const [chapterStatus, setChapterStatus] = useState({
    Total: 0,
    Active: 0,
    inActive: 0,
    youWaahDayCount: 0,
    cancerCrusedersCount: 0,
  });

  const [open, setOpen] = useState(false);

  // const xAxisData = ["group A", "group B", "group C"];
  // const seriesData = [
  //   { data: [4, 3, 5], label: "Dataset 1" },
  //   { data: [1, 6, 3], label: "Dataset 2" },
  //   { data: [2, 5, 6], label: "Dataset 3" }
  // ];

  useEffect(() => {
    const stateData = states.find(
      (state) => state.BjsStateName === selectedOption.BjsStateName
    );

    if (selectedOption.BjsStateName == "India") {
      setMapImgUrl(India);
    } else if (stateData) {
      setMapImgUrl(stateData.mapImg);
    }
  }, [selectedOption]);

  const [allStates, setAllStates] = useState([]);

  // useEffect(() => {
  //   const stateData = states.find(state => state.BjsStateName === selectedStat);
  //   setMapImgUrl(stateData ? stateData.mapImg : India);
  // }, [selectedStat]);

  const getAllStates = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/misOfficeBearerStateList`
      );
      setAllStates(res.data);
    } catch (err) {
      console.error("ERROR", err);
    }
  };

  useEffect(() => {
    getAllData();
    getAllStates();
  }, []);

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
    //  Combined logic for map image update
    if (selectedOption) {
      console.log(
        "selectedOption.BjsStateName11 ",
        selectedOption.BjsStateName
      );

      if (selectedOption.BjsStateName == "India") {
        console.log("dsa ", India);
        setMapImgUrl(India);
      } else {
        const stateData = states.find(
          (state) => state.BjsStateName === selectedOption.BjsStateName
        );
        if (stateData) {
          console.log("dsa ", stateData.mapImg);

          setMapImgUrl(stateData.mapImg);
        }
      }
    }
  }, [selectedOption]);

  console.log("iddd ", selectedOption);
  const selectedState = states.find(
    (state) => state.BjsStateName === allUserData
  );

  useEffect(() => {
    countStatus();
    barChartCount();
  }, [selectedOption]);

  function countStatus() {
    let aspirationalChapters = {
      Total: 0,
      Active: 0,
      inActive: 0,
    };

    if (selectedOption?.BjsStateName === "India") {
      // Count all active/inactive statuses in the entire dataset

      aspirationalChapters.Total = JsonData.length;
      JsonData.forEach((item) => {
        if (item.activeInactiveStatus === "Active") {
          aspirationalChapters.Active++;
        } else if (item.activeInactiveStatus === "Inactive") {
          aspirationalChapters.inActive++;
        }
      });
    } else if (selectedOption?.BjsStateName) {
      // Count active/inactive statuses for the selected state
      JsonData.forEach((item) => {
        if (item.bjsState === selectedOption.BjsStateName) {
          aspirationalChapters.Total++;

          if (item.activeInactiveStatus === "Active") {
            aspirationalChapters.Active++;
          } else if (item.activeInactiveStatus === "Inactive") {
            aspirationalChapters.inActive++;
          }
        }
      });
    }

    console.log("checkStatus", aspirationalChapters);
    setChapterStatus(aspirationalChapters); // Update state with the count
  }

  function barChartCount() {
    if (selectedOption?.BjsStateName === "India") {
      let stateWiseData = {};

      JsonData.forEach((item) => {
        const state = item.bjsState;
        if (!stateWiseData[state]) {
          stateWiseData[state] = {
            youWaahDayCount: 0,
            cancerCrusedersCount: 0,
          };
        }
        if (item.youWaahDay === "Yes") stateWiseData[state].youWaahDayCount++;
        if (item.cancerCruseders === "Yes")
          stateWiseData[state].cancerCrusedersCount++;
      });

      setXAxisData(Object.keys(stateWiseData));
      setSeriesData([
        { data: Object.values(stateWiseData).map((d) => d.youWaahDayCount) },
        {
          data: Object.values(stateWiseData).map((d) => d.cancerCrusedersCount),
        },
      ]);
    } else if (selectedOption?.BjsStateName) {
      let youWaahDayCount = 0,
        cancerCrusedersCount = 0;

      JsonData.forEach((item) => {
        if (item.bjsState === selectedOption.BjsStateName) {
          if (item.youWaahDay === "Yes") youWaahDayCount++;
          if (item.cancerCruseders === "Yes") cancerCrusedersCount++;
        }
      });

      setXAxisData(["YouWaahDay", "Cancer Cruseders"]);
      setSeriesData([{ data: [youWaahDayCount, cancerCrusedersCount] }]);
    }
  }

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
          <StatsCard heading="Total Chapters" number={chapterStatus.Total} />
          <StatsCard heading="Vibrant Chapters" number={chapterStatus.Active} />
          <StatsCard
            heading="Aspiratinal Chapters"
            number={chapterStatus.inActive}
          />
        </div>
        <div
          className="col-2-child child-30"
          style={{ overflowX: "auto", whiteSpace: "nowrap" }}
        >
          <IconButton
            onClick={() => setOpen(true)}
            style={{ marginLeft: "auto" }} // ✅ Pushes the button to the right
          >
            <FullscreenIcon fontSize="small" />
          </IconButton>
          <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} />

          <Modal open={open} onClose={() => setOpen(false)}>
        <div
          style={{
            width: "90%",
            height: "80vh",
            background: "#fff",
            margin: "5% auto",
            padding: 20,
            borderRadius: 8,
            outline: "none",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative", // Required for absolute close button
          }}
        >
          {/* 🔴 Close Button at Top-Right */}
          <IconButton
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "red",
            }}
          >
            <CloseIcon fontSize="medium" />
          </IconButton>

          {/* Bar Chart Inside Modal */}
          <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} />
        </div>
      </Modal>
        </div>

        <div className="col-2-child child-30">
          {/* <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} /> */}
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
          {allUserData && (
            <Image
              src={mapImgUrl}
              alt="Map Image"
              style={{ maxHeight: "250px" }}
            />
          )}
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
