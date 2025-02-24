import React from "react";

import {useState, useEffect} from "react";
import { useDropdown } from "../../Service/DropdownProvider";

const Dashboard =() => {
    const { selectedOption } = useDropdown(); // Get selected option


    return (
        <div><h1>Dashboard</h1>
              <p>Selected Option: {selectedOption}</p> {/* Display selected option */}

        
        </div>
    )
}

export default Dashboard;
