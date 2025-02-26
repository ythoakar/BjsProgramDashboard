
// import React, { useState, useEffect } from 'react';
// import "./StateExeCommitteeCard.css"
// import { Table, Spin } from 'antd';

// const SECCard = ({ title }) => {
//     const [dataSource, setDataSource] = useState([]);
//     const [loading, setLoading] = useState(false)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setLoading(true)
//                 const response = await fetch(`${process.env.REACT_APP_BASE_URL}/misOfficeBearerUserList`);
//                 const data = await response.json();
//                 setDataSource(data);
//                 setLoading(false)
//             } catch (error) {
//                 setError(error)
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     const columns = [
//         {
//             title: 'Name',
//             key: 'name',
//             render: (_, record) => `${record.fName || ''} ${record.mName || ''} ${record.lName || ''}`.trim(),
//         },
//         {
//             title: 'Occupation',
//             dataIndex: 'occupation',
//             key: 'occupation',
//         },
//         {
//             title: 'Contact',
//             dataIndex: 'mobile',
//             key: 'mobile',
//         },
//     ];

//     return <>
//         <div className="table-container">
//         <h2>{title}</h2>
//             {loading ? <Spin /> : <Table dataSource={dataSource} columns={columns} pagination={false} scroll={{y:500, x:100}} bordered/>}
//             {error && <div>Error: {error.message}</div>}
//         </div>
//     </>
// };

// export default SECCard;


import React from 'react';
import './StateExeCommitteeCard.css';
import { Table, Spin } from 'antd';

const SECCard = ({ title, data, loading, error }) => {
  // console.log(title,data,loading,error)

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => `${record.fName || ''} ${record.mName || ''} ${record.lName || ''}`.trim(),
    },
    {
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
    },
    {
      title: 'Contact',
      dataIndex: 'mobile',
      key: 'mobile',
    },
  ];

  const titleColors = {
    "Governing Body": "#f0faff",
    "Operations Committee": "#fdf0ff",
    "National Program Heads": "#f1fff0"
    // Add more titles and colors as needed
  };

  const backgroundColor = titleColors[title] || "#ffffff"; // Default color if title not found


  return (
    <div className="table-container" style={{ backgroundColor }}>   
        <h2>{title}</h2>
      {loading ? (
        <Spin />
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        <Table dataSource={data} columns={columns} pagination={false} scroll={{ y: 500, x: 100 }} bordered />
      )}
    </div>
  );
};

export default SECCard;
