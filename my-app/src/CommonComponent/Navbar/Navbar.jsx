




import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import { Download, Menu as MenuIcon, Close } from "@mui/icons-material";
import "./Navbar.css";
import logo from "../../../src/imgs/bjsLogoWhiteBG.png";
import { useDropdown, useCommittee } from "../../Service/DropdownProvider";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import bjsData from "../../../src/Data/volunteerMTestDb.dashboardData.json";
import { downloadAsExcel } from "../../Service/DownloadAsExcel";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);
  const [states, setStates] = useState([]);
  const { selectedOption, setSelectedOption } = useDropdown();
  const [headingName, setHeadingName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const { committeeData } = useCommittee();
  const location = useLocation();

  useEffect(() => {
    async function getStates() {
      try {
        let response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/misOfficeBearerStateList`
        );

        const bjsStateNames = new Set(bjsData.map((item) => item.bjsState));
        const filteredStates = response.data.filter((state) =>
          bjsStateNames.has(state.BjsStateName)
        );

        console.log(filteredStates);
        setStates(filteredStates);
      } catch (err) {
        console.log("Error fetching states:", err);
      }
    }
    getStates();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isSidebarOpen]);

  const handleStateSelection = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "select-all") {
      setSelectedOption({ _id: "select-all", BjsStateName: "India" });
    } else {
      const selectedState =
        states.find((state) => state._id === selectedValue) || null;
      setSelectedOption(selectedState);
    }
  };

  useEffect(() => {
    const path = location.pathname;
    const lastSegment = path.split("/").pop();
    switch (lastSegment) {
      case "SEC":
        setHeadingName("State Executive Committee");
        setShowDropdown(true);
        break;
      case "NEC":
        setHeadingName("National Executive Committee");
        setShowDropdown(false);
        break;
      case "REC":
        setHeadingName("Regional Executive Committee");
        break;
      case "DEC":
        setHeadingName("District Executive Committee");
        break;
      default:
        setShowDropdown(true);
        setHeadingName(selectedOption?.BjsStateName);
        break;
    }
  }, [location.pathname, selectedOption]);

  const handleDownload = () => {
    downloadAsExcel(committeeData, "nec.xlsx");
  };

  return (
    <>
      <nav className="navbar">
        <div className="back-button">
          <Link to="/">
            <img src={logo} alt="Bjs Logo" style={{ maxWidth: 70 }} />
          </Link>
        </div>
        <div className="nav-heading">{headingName}</div>
        <ul className="nav-links"  >
          <li>
            <Download
              sx={{
                cursor: "pointer",
                fontSize: 28,
                color: "white",
              }}
              onClick={handleDownload}
            />
          </li>

          {showDropdown && (
            <li>
              <FormControl fullWidth>
                <Select
                  labelId="state-select-label"
                  value={selectedOption?._id || ""}
                  onChange={handleStateSelection}
                  sx={{ minWidth: 200, backgroundColor: "white" }}
                >
                  <MenuItem value="select-all">Select All</MenuItem>
                  {states.map((state) => (
                    <MenuItem key={state._id} value={state._id}>
                      {state.BjsStateName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </li>
          )}
        </ul>

        {/* Mobile View: Hamburger Icon */}

       
        
        <div className="menu-icon" onClick={() => setIsSidebarOpen(true)}>
        <MenuIcon sx={{ fontSize: 28, color: "white" }} />
      </div>
        
        
    
      </nav>

      {/* Sidebar */}
      <div ref={sidebarRef} className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <Close
            sx={{ fontSize: 28, cursor: "pointer", color: "white" }}
            onClick={() => setIsSidebarOpen(false)}
          />
          <div className="sidebar-download">
            <Download
              sx={{ cursor: "pointer", fontSize: 28, color: "white" }}
              onClick={handleDownload}
            />
          </div>
        </div>

        {/* Dropdown Section */}
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
          {showDropdown && (
            <FormControl fullWidth className="sidebar-dropdown">
              <Select
                labelId="state-select-label"
                value={selectedOption?._id || ""}
                onChange={handleStateSelection}
                sx={{ minWidth: 200, backgroundColor: "white" }}
              >
                <MenuItem value="select-all">Select All</MenuItem>
                {states.map((state) => (
                  <MenuItem key={state._id} value={state._id}>
                    {state.BjsStateName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;

