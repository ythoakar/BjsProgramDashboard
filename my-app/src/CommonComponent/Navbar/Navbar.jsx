import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Select, MenuItem } from "@mui/material";
import "./Navbar.css";
import { useDropdown } from "../../Service/DropdownProvider";
import axios from "axios";
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import bjsData from "../../../src/Data/volunteerMTestDb.dashboardData.json";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [states, setStates] = useState([]);
  const { selectedOption, setSelectedOption } = useDropdown();

  useEffect(() => {
    async function getStates() {
      try {
        let response = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/misOfficeBearerStateList`
        );
        // setStates(response.data);


        const bjsStateNames = new Set(bjsData.map(item => item.bjsState));

        // Step 2: Filter allStates based on bjsStateNames
        const filteredStates = response.data.filter(state => bjsStateNames.has(state.BjsStateName));
        
        console.log(filteredStates);
        setStates(filteredStates)



      } catch (err) {
        console.log("Error fetching states:", err);
      }
    }
    getStates();
  }, []);

  const handleStateSelection = (event) => {
    const selectedValue = event.target.value;

    if (selectedValue === "select-all") {
      setSelectedOption({ _id: "select-all", BjsStateName: "India" });
    } else {
      const selectedState = states.find((state) => state._id === selectedValue) || null;
      setSelectedOption(selectedState);
    }
  };



function filterStates(){

}


  return (
    <nav className="navbar">
      <div className="nav-heading">{selectedOption.BjsStateName}</div>
      <ul className="nav-links">
        <li>
        <FormControl fullWidth>
            {/* <InputLabel id="demo-simple-select-label">Select State</InputLabel> */}
            <Select
              labelId="demo-simple-select-label"
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
      </ul>
    </nav>
  );
};

export default Navbar;
