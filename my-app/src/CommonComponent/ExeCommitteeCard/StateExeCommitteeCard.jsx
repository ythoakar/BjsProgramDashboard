import React from "react";
import {useState, useEffect} from "react"
import "./StateExeCommitteeCard.css";
import { Table, Spin } from "antd";
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CommitteeFullView from "../CommitteeFullViewPopUp/CommitteeFullView";
import Tooltip from '@mui/material/Tooltip';



const SECCard = ({ title, data, loading, error }) => {
  console.log("sec ", data);

  const [open, setOpen] = useState(false)


function handleClose(){
  setOpen(false)
}


  const columns = [
    {
      title: "Name",
      key: "name",
      render: (_, record) => `${record.name || ""}`.trim(),
    },
    {
      title: "Designation",
      dataIndex: "occupation",
      key: "occupation",
      render: (_, record) => `${record.Designation || ""}`.trim(),
    },
    {
      title: "Contact",
      dataIndex: "mobile",
      key: "mobile",
      render: (_, record) => `${record?.mobileNo?.$numberLong || ""}`.trim(),
    },
  ];

  const titleColors = {
    "Governing Body": "#c9f9bd",
    "Operations Committee": "#ff96bc",
    "National Program Heads": "#839af7",
    // Add more titles and colors as needed
  };

  const backgroundColor = titleColors[title] || "#ffffff"; // Default color if title not found

  return (
    <div className="table-container" style={{ backgroundColor }}>
   <div style={{ display: "flex", alignItems: "center" , padding:"10px"}}>
  <div style={{ flexGrow: 1, textAlign: "center" }}>
    <h2 style={{ margin: 0 }}>{title}</h2>
  </div>
  <div onClick={() => setOpen(true)} style={{cursor:"pointer"}}>
  <Tooltip title="Full View">
    <OpenInFullIcon />
    </Tooltip>
  </div>
</div>

     

        <Table
          dataSource={data}
          columns={columns}
          pagination={false}
          scroll={{ y: 500, x: 100 }}
          bordered
        />

  
     
        <CommitteeFullView open={open} handleClose={handleClose} data={data} title={title}/>
           
    

    </div>
  );
};

export default SECCard;
