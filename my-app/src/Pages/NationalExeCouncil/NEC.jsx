
import React, { useState, useEffect } from "react";
import NECCard from "../../CommonComponent/ExeCommitteeCard/NationalExeCommitteeCard";
import { Spinner } from "antd";
import "./NEC.css";
import NECCommitteeData from "../../Data/NECCommitteeData.json";

function NEC() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to filter data based on committeeName
  const filterCommitteeData = (committeeName) => {
    return NECCommitteeData.filter(
      (item) => item.committeeName === committeeName
    );
  };

  return (
    <div className="cardsContainer">
      <NECCard
        title="Governing Body"
        data={filterCommitteeData("Governing Committee")}
        loading={loading}
        error={error}
      />
      <NECCard
        title="Operations Committee"
        data={filterCommitteeData("Executive, Operation & Development (EOD) Committee")}
        loading={loading}
        error={error}
      />
      <NECCard
        title="National Program Heads"
        data={filterCommitteeData("National Program Head")}
        loading={loading}
        error={error}
      />
      <NECCard
        title="Ex-Officio Members"
        data={filterCommitteeData("EX-Officio Members State President - Secretaries")}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default NEC;

