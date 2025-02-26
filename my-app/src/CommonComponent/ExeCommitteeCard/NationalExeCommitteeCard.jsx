
import React from 'react';
import './NationalExeCommitteeCard.css';
import { Table, Spin } from 'antd';

const NECCard = ({ title, data, loading, error }) => {
  // console.log(title,data,loading,error)

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => `${record.name || ''}`.trim(),
    },
    {
      title: 'Designation',
      dataIndex: 'occupation',
      key: 'occupation',
      render: (_, record) => `${record.designation || ''}`.trim(),

    },
  ];

  const titleColors = {
    "Governing Body": "#c7ebfc",
    "Operations Committee": "#fbe3ff",
    "National Program Heads": "#e2ffe0",
    "Ex-Officio Members": "#d2faf9"
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

export default NECCard;