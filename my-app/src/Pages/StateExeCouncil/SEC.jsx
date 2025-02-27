import React, { useState, useEffect } from "react";
import SECCard from "../../CommonComponent/ExeCommitteeCard/StateExeCommitteeCard";
import { Spinner } from "antd";
import "./SEC.css";
import NECCommitteeData from "../../Data/NECCommitteeData.json";
import SECCommitteeData from "../../Data/SECCommitteeData.json"
import {useDropdown} from "../../Service/DropdownProvider";


function SEC() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
    const { selectedOption } = useDropdown();
    console.log("selectedOption11  ", selectedOption)
    console.log("dataaaa12 ", SECCommitteeData)

  // Function to filter data based on stateName
    const filterCommitteeData = (stateName, committeeName) => {
      console.log("stateName", stateName, committeeName)
      return SECCommitteeData.filter(
        (item) => item.statename == stateName && item.Committee == committeeName
      );
    };

  return (
    <div className="cardsContainer">
    <SECCard
      title="Governing Body"
      data={filterCommitteeData(selectedOption?.BjsStateName, "Governing Committee")}
      loading={loading}
      error={error}
    />
    <SECCard
      title="Operations Committee"
      data={filterCommitteeData(selectedOption.BjsStateName, "Executive, Operation & Development (EOD) Committee")}
      loading={loading}
      error={error}
    />
    <SECCard
      title="National Program Heads"
      data={filterCommitteeData(selectedOption.BjsStateName, "National Program Head")}
      loading={loading}
      error={error}
    />
  </div>
  );
}

export default SEC;
