// import React from 'react'
// import SECCard from '../../CommonComponent/Navbar/StateExeCommitteeCard'
// import "./SEC.css"

// function SEC() {
//   return (
//     <div className= "cardsContainer">
//         <SECCard title="Governing Body" />
//         <SECCard title="Operations Committee"/>
//         <SECCard title="National Program Heads"/>
//     </div>
//   )
// }

// export default SEC

import React, { useState, useEffect } from 'react';
import SECCard from '../../CommonComponent/Navbar/StateExeCommitteeCard';
import { Spinner } from 'antd';
import './SEC.css';

function SEC() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/misOfficeBearerUserList`);
        const data = await response.json();

        // Log the data to verify the response structure
        console.log(data);

        setData(data);  // Set the fetched data to state

        setLoading(false);
      } catch (error) {
        setError(error);
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="cardsContainer">
      <SECCard
        title="Governing Body"
        data={data}
        loading={loading}
        error={error}
      />
      <SECCard
        title="Operations Committee"
        data={data}
        loading={loading}
        error={error}
      />
      <SECCard
        title="National Program Heads"
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default SEC;
