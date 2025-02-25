import { createContext, useContext, useState } from "react";

// Create Context
const DropdownContext = createContext();

// Create a Provider Component
export const DropdownProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState({ _id: "select-all", BjsStateName: "India" });

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Custom Hook to Use Context
export const useDropdown = () => useContext(DropdownContext);
