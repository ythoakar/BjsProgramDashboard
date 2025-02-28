import { createContext, useContext, useState } from "react";

// Create Dropdown Context
const DropdownContext = createContext();

// Create Committee Context
const CommitteeContext = createContext();

// Create a Provider Component
export const DropdownProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState({ _id: "select-all", BjsStateName: "India" });
  const [committeeData, setCommitteeData] = useState([]); // Global committee data

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      <CommitteeContext.Provider value={{ committeeData, setCommitteeData }}>
        {children}
      </CommitteeContext.Provider>
    </DropdownContext.Provider>
  );
};

// Custom Hook to Use Dropdown Context
export const useDropdown = () => useContext(DropdownContext);

// Custom Hook to Use Committee Context
export const useCommittee = () => useContext(CommitteeContext);
