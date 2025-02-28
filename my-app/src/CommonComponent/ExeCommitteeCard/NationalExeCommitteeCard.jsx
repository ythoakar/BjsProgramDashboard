import React, { useState } from "react";
import "./NationalExeCommitteeCard.css";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import CommitteeFullView from "../CommitteeFullViewPopUp/CommitteeFullView";

// ✅ Import MUI Components
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const NECCard = ({ title, data }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const titleColors = {
    "Governing Body": "#c7ebfc",
    "Operations Committee": "#fbe3ff",
    "National Program Heads": "#e2ffe0",
    "Ex-Officio Members": "#d2faf9",
  };

  const backgroundColor = titleColors[title] || "#ffffff"; // Default color

  return (
    <div className="table-container" style={{ backgroundColor: "white" }}>
      {/* Title and Expand Icon */}
      <div style={{ display: "flex", alignItems: "center", padding: "10px", backgroundColor: backgroundColor }}>
        <div
          style={{
            flexGrow: 1,
            textAlign: "center",
            height: "30%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: "1rem",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </h2>
        </div>
        <div onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
          <OpenInFullIcon />
        </div>
      </div>

      {/* ✅ MUI Table Inside a Scrollable Container */}
      <div className="table-div">
        <TableContainer component={Paper} className="table-container-scroll">
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell style={{ background: "#303030", color: "white", fontSize: "16px", fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell style={{ background: "#303030", color: "white", fontSize: "16px", fontWeight: "bold" }}>
                  Designation
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} style={{ backgroundColor: index % 2 === 0 ? "#f1f1f1" : "#ffffff" }}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.designation}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      {/* Modal for Full View */}
      <CommitteeFullView open={open} handleClose={handleClose} data={data} title={title} />
    </div>
  );
};

export default NECCard;
