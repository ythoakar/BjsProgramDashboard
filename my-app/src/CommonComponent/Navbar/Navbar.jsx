import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDropdown } from "../../Service/DropdownProvider";
import axios from "axios";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [states, setStates] = useState([]); // State to store fetched states

  const { selectedOption, setSelectedOption } = useDropdown(); // Using Context

  // Fetch states from API
  async function getStates() {
    try {
      let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/misOfficeBearerStateList`);
      console.log("States Data:", response.data);
      setStates(response.data);
    } catch (err) {
      console.log("Error fetching states:", err);
    }
  }

  useEffect(() => {
    getStates();
  }, []);

  // Handle dropdown selection
  const handleStateSelection = (state) => {
    console.log(" state state", state )
    setSelectedOption(state); // Save selected object in Context
    setDropdownOpen(false); // Close dropdown after selection
  };

  return (
    <nav className="navbar">
      <div className="logo"></div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>☰</div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        
        {/* Dropdown for States */}
        <li className="dropdown">
          <div className="dropdown-label" onClick={() => setDropdownOpen(!dropdownOpen)}>
            {selectedOption?.BjsStateName || "Select State"} ▼
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              {states.map((state) => (
                <div key={state._id} onClick={() => handleStateSelection(state)} className="dropdown-item">
                  {state.BjsStateName}
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
