import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDropdown } from "../../Service/DropdownProvider";

const optionsList = ["Option 1", "Option 2", "Option 3", "Option 4"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { selectedOption, setSelectedOption } = useDropdown(); // Using Context

  // Check if all options are selected
  const isAllSelected = selectedOption.length === optionsList.length;

  // Handle individual checkbox change
  const handleCheckboxChange = (option) => {
    if (selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter((item) => item !== option));
    } else {
      setSelectedOption([...selectedOption, option]);
    }
  };

  // Handle "Select All"
  const handleSelectAll = () => {
    if (isAllSelected) {
      setSelectedOption([]); // Deselect all
    } else {
      setSelectedOption([...optionsList]); // Select all
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>☰</div>
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
       

        {/* Multi-Select Dropdown */}
        <li className="dropdown">
          <div className="dropdown-label" onClick={() => setDropdownOpen(!dropdownOpen)}>
            Select Options ▼
          </div>
          {dropdownOpen && (
            <div className="dropdown-menu">
              <label>
                <input
                  type="checkbox"
                  checked={isAllSelected}
                  onChange={handleSelectAll}
                />
                Select All
              </label>
              {optionsList.map((option) => (
                <label key={option}>
                  <input
                    type="checkbox"
                    checked={selectedOption.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
