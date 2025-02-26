import React from 'react';
import './StateExeCommitteeCard.css';
import { Table, Spin } from 'antd';

const SECCard = ({ title, data, loading, error }) => {
  // console.log(title,data,loading,error)

  const columns = [
    {
      title: 'Name',
      key: 'name',
      render: (_, record) => `${record.name  || ''}`.trim(),
    },
    {
      title: 'Designation',
      dataIndex: 'occupation',
      key: 'occupation',
      render: (_, record) => `${record.designation || ''}`.trim(),

    },
    {
      title: 'Contact',
      dataIndex: 'mobile',
      key: 'mobile',
      render: (_, record) => `${record.mobileNo.$numberLong || ''}`.trim(),

    },
  ];

  const titleColors = {
    "Governing Body": "#c9f9bd",
    "Operations Committee": "#ff96bc",
    "National Program Heads": "#839af7"
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
