
import React, { useState, useEffect } from 'react';
import NECCard from '../../CommonComponent/ExeCommitteeCard/NationalExeCommitteeCard';
import { Spinner } from 'antd';
import './NEC.css';

function NEC() {
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
      <NECCard
        title="Governing Body"
        data={data}
        loading={loading}
        error={error}
      />
      <NECCard
        title="Operations Committee"
        data={data}
        loading={loading}
        error={error}
      />
      <NECCard
        title="National Program Heads"
        data={data}
        loading={loading}
        error={error}
      />
      <NECCard
        title="Ex-Officio Members"
        data={data}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default NEC;
