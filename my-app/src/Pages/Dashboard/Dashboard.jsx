import React from "react";
import "./Dashboard.css";
import { useState, useEffect } from "react";
import { useDropdown } from "../../Service/DropdownProvider";
import axios from "axios";
import SEC_Div from "../../Components/DashBoard_Components/SEC_Div";
import CommitteeCard from "../../CommonComponent/CommitteeCard/CommitteeCard";
import NECCommitteeData from "../../Data/NECCommitteeData.json";
import { Image } from "antd";
import StatsCard from "../../CommonComponent/StatsCard/StatsCard";
import states from "../../../src/Data/States.json";
import India from "../../imgs/INDIA.jpg";
import JsonData from "../../../src/Data/volunteerMTestDb.dashboardData.json";
import BarChartComponent from "../../CommonComponent/BarChartComponent/BarChartComponent";
import FullscreenIcon from "@mui/icons-material/OpenInFull";
import { Modal, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from '@mui/material/Tooltip';


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
    // getAllData();
    getAllStates();
  }, []);

  // async function getAllData() {
  //   try {
  //     let response = await axios.get(
  //       `${process.env.REACT_APP_BASE_URL}/misOfficeBearerUserList`
  //     );

  //     console.log("response ", response);
  //     setAllUserData(response.data);
  //   } catch (err) {
  //     console.log("Error occured in All Data ", err);
  //   }
  // }

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

  // function barChartCount() {
  //   if (selectedOption?.BjsStateName === "India") {
  //     let stateWiseData = {};

  //     JsonData.forEach((item) => {
  //       const state = item.stateShortCode;
  //       if (!stateWiseData[state]) {
  //         stateWiseData[state] = {
  //           youWaahDayCount: 0,
  //           cancerCrusedersCount: 0,
  //         };
  //       }
  //       if (item.youWaahDay === "Yes") stateWiseData[state].youWaahDayCount++;
  //       if (item.cancerCruseders === "Yes")
  //         stateWiseData[state].cancerCrusedersCount++;
  //     });

  //     setXAxisData(Object.keys(stateWiseData));
  //     setSeriesData([
  //       { data: Object.values(stateWiseData).map((d) => d.youWaahDayCount) },
  //       {
  //         data: Object.values(stateWiseData).map((d) => d.cancerCrusedersCount),
  //       },
  //     ]);
  //   } else if (selectedOption?.BjsStateName) {
  //     let youWaahDayCount = 0,
  //       cancerCrusedersCount = 0;

  //     JsonData.forEach((item) => {
  //       if (item.bjsState === selectedOption.BjsStateName) {
  //         if (item.youWaahDay === "Yes") youWaahDayCount++;
  //         if (item.cancerCruseders === "Yes") cancerCrusedersCount++;
  //       }
  //     });

  //     setXAxisData(["YouWaahDay", "Cancer Cruseders"]);
  //     setSeriesData([{ data: [youWaahDayCount, cancerCrusedersCount] }]);
  //   }
  // }


  function barChartCount() {
    if (selectedOption?.BjsStateName === "India") {
      let stateWiseData = {};

      JsonData?.forEach((item) => {
        const state = item.stateShortCode;
        console.log(item.stateShortCode)
        if (!stateWiseData[state]) {
          stateWiseData[state] = {
            youWaahDayCount: 0,
            cancerCrusedersCount: 0,
          };
        }
        if (item.youWaah === "Yes") stateWiseData[state].youWaahDayCount++;
        if (item.cancerCruseders === "Yes")
          stateWiseData[state].cancerCrusedersCount++;
      });

      setXAxisData(Object.keys(stateWiseData)); // Set state codes as xAxisData
      setSeriesData([
        {
          data: Object.values(stateWiseData).map((d) => d.youWaahDayCount),
          color: "red",
        },
        {
          data: Object.values(stateWiseData).map((d) => d.cancerCrusedersCount),
          color: "green",
        },
      ]);
    } else if (selectedOption?.BjsStateName) {
      let youWaahDayCount = 0,
        cancerCrusedersCount = 0;

      JsonData?.forEach((item) => {
        if (item.bjsState === selectedOption.BjsStateName) {
          if (item.youWaah === "Yes") youWaahDayCount++;
          if (item.cancerCruseders === "Yes") cancerCrusedersCount++;
        }
      });

      setXAxisData(["YouWaah Day", "Cancer Cruseders"]);
      setSeriesData([
        {
          data: [youWaahDayCount],
          color: "red",
        },
        {
          data: [cancerCrusedersCount],
          color: "green",
        },
      ]);
    }
  }





  // ORIGINAL VVV

  // function barChartCount() {
  //   if (selectedOption?.BjsStateName === "India") {
  //     let stateWiseData = {};

  //     JsonData?.forEach((item) => {
  //       const state = item.stateShortCode;
  //       if (!stateWiseData[state]) {
  //         stateWiseData[state] = {
  //           youWaahDayCount: 0,
  //           cancerCrusedersCount: 0,
  //         };
  //       }
  //       if (item.youWaah === "Yes") stateWiseData[state].youWaahDayCount++;
  //       if (item.cancerCruseders === "Yes")
  //         stateWiseData[state].cancerCrusedersCount++;
  //     });

  //     setXAxisData(Object.keys(stateWiseData));
  //     setSeriesData([
  //       {
  //         data: Object.values(stateWiseData).map((d) => d.youWaahDayCount),
  //         color: "red"
  //       },
  //       {
  //         data: Object.values(stateWiseData).map((d) => d.cancerCrusedersCount),
  //         color: "green"

  //       },
  //     ]);
  //   } else if (selectedOption?.BjsStateName) {
  //     let youWaahDayCount = 0,
  //       cancerCrusedersCount = 0;

  //     JsonData?.forEach((item) => {
  //       if (item.bjsState === selectedOption.BjsStateName) {
  //         if (item.youWaah === "Yes") youWaahDayCount++;
  //         if (item.cancerCruseders === "Yes") cancerCrusedersCount++;
  //       }
  //     });

  //     setXAxisData([{ data: "YouWaah Day", color: "red" }, { data: "Cancer Cruseders", color: "green" }]);
  //     setSeriesData([
  //       {
  //         data: [youWaahDayCount], // Wrap single values in an array
  //         color: "red",
  //       },
  //       {
  //         data: [cancerCrusedersCount], // Wrap single values in an array
  //         color: "green",
  //       },
  //     ]);

  //   }
  // }




  return (
    <div className="dashboard-container">
      {/* First column: 25% width */}
      <div className="col col-1">
        <div className="col-1-child child-50">
          {NECCommitteeData && (
            <SEC_Div
              data={NECCommitteeData}
              heading="National Executive Committee"
              navigateTo="/NEC"
            />
          )}
        </div>

        <div className="col-1-child child-50">
          {NECCommitteeData && (
            <SEC_Div
              data={NECCommitteeData}
              heading="State Executive Committee"
              navigateTo="/SEC"
            />
          )}
        </div>

        <div className="col-1-child child-50">
          {NECCommitteeData && (
            // <p>Coming Soon...</p> gets the entire thing
            <SEC_Div
              data={NECCommitteeData}
              heading="Regional Executive Committee"
            />
          )}
        </div>

        <div className="col-1-child child-50">
          {NECCommitteeData && (
            <SEC_Div
              data={NECCommitteeData}
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
          <StatsCard heading="Aspirational Chapters" number={chapterStatus.inActive}
          />
        </div>
        <div className="col-2-child child-30">
          {/* Heading and Fullscreen Icon */}
          <div
            style={{
              zIndex: 10,
              width: "100%",
              height: "10%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              cursor: "pointer",
              flexShrink: 0, // Prevents shrinking
            }}
          >
            <h5
              style={{
                position: "absolute",
                top: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                margin: 0,
              }}
            >
              Foundation Program Status
            </h5>
            <div style={{ marginLeft: "auto", paddingRight: 10 }}>
              <Tooltip title="Focus Mode" >

                <FullscreenIcon fontSize="small" style={{ top: "10px", position: "relative" }} onClick={() => setOpen(true)} />
              </Tooltip>
            </div>
          </div>

          {/* Bar Chart Component (Takes Full Space) */}
          <div
            style={{
              width: "100%",
              flexGrow: 1, // Ensures it fills remaining space
              display: "flex",
            }}
          >
            <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} />
          </div>

          {/* Fullscreen Modal */}
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
                position: "relative",
              }}
            >
              {/* Modal Heading */}
              <div>
                <h2>Foundation Program Status</h2>
              </div>

              {/* Close Button */}
              <div
                style={{
                  position: "absolute",
                  top: 15,
                  right: 20,
                  color: "red",
                  cursor: "pointer",
                  zIndex: 10,
                }}
                onClick={() => setOpen(false)}
              >


                <Tooltip title="Close">
                  <CloseIcon fontSize="medium" />
                </Tooltip>
              </div>

              {/* Bar Chart Inside Modal */}
              <div style={{ width: "100%", flexGrow: 1, display: "flex" }}>
                <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} showLabels={false} />

              </div>
            </div>
          </Modal>
        </div>

        <div className="col-2-child child-35">
          <BarChartComponent xAxisData={xAxisData} seriesData={seriesData} showLabels={true} showLegendWithColors={true} />

        </div>
        <div className="col-2-child child-10">Instructions</div>
      </div>



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
          {NECCommitteeData && (
            <CommitteeCard
              data={NECCommitteeData}
              heading="District Executive Committee"
            />
          )}
        </div>

        <div className="col-3-child child-50">
          <h3>Mulyavardhan Team</h3>
          {NECCommitteeData && (
            <CommitteeCard
              data={NECCommitteeData}
              heading="District Executive Committee"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
