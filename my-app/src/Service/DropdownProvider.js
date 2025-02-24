import { createContext, useContext, useState } from "react";

// Create Context
const DropdownContext = createContext();

// Create a Provider Component
export const DropdownProvider = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("Option 1");

  return (
    <DropdownContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </DropdownContext.Provider>
  );
};

// Custom Hook to Use Context
export const useDropdown = () => useContext(DropdownContext);
