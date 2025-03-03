import React, { useState, useEffect } from "react";
import SECCard from "../../CommonComponent/ExeCommitteeCard/StateExeCommitteeCard";
import { Spinner } from "antd";
import "./SEC.css";
import NECCommitteeData from "../../Data/NECCommitteeData.json";
import SECCommitteeData from "../../Data/SECCommitteeData.json"
import {useDropdown, useCommittee} from "../../Service/DropdownProvider";
import NECCard from "../../CommonComponent/ExeCommitteeCard/NationalExeCommitteeCard";

function SEC() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { committeeData, setCommitteeData } = useCommittee(); // Use global state




    const { selectedOption } = useDropdown();
    console.log("selectedOption11  ", selectedOption)
    console.log("dataaaa12 ", SECCommitteeData)

  // Function to filter data based on stateName
    const filterCommitteeData = (stateName, committeeName) => {
      console.log("stateName", stateName, committeeName)
      const filteredData = SECCommitteeData.filter(
        (item) => item.statename == stateName && item.Committee == committeeName
      );
   
      return filteredData;


    };


useEffect(()=> {
  const filteredData = SECCommitteeData.filter(
    (item) => item.statename == selectedOption?.BjsStateName
  );

  setCommitteeData(filteredData);


}, [selectedOption])

   
  
  
  
  return (
    <div className="cardsContainer">
    <NECCard
      title="Governing Body"
      data={filterCommitteeData(selectedOption?.BjsStateName, "Governing Committee")}
      loading={loading}
      error={error}
    />
    <NECCard
      title="Operations Committee"
      data={filterCommitteeData(selectedOption.BjsStateName, "Operations Committee")}
      loading={loading}
      error={error}
    />
    <NECCard
      title="National Program Heads"
      data={filterCommitteeData(selectedOption.BjsStateName, "statename Program Heads")}
      loading={loading}
      error={error}
    />
  </div>
  );
}

export default SEC;
