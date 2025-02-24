import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const SEC_Div = ({ data, heading }) => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Table */}

      <Button
        variant="contained"
        sx={{
          backgroundColor: "#FFC107",
          color: "black",
          fontWeight: "bold",
          marginBottom:"10px",
          textTransform: "none",
          alignSelf: "center",
          padding: "4px 16px", // Decreases button padding
          minHeight: "20px", // Ensures a smaller height
          fontSize: "10px", // Adjusts text size for a compact look
        }}
      >
        {heading}
      </Button>

      <TableContainer
        component={Paper}
        sx={{
          maxHeight: "100%",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Table stickyHeader size="small">
          <TableHead>
            {/* <TableRow sx={{ backgroundColor: "black" }}>
              <TableCell sx={{ color: "white", backgroundColor: "black" }}><b>Name</b></TableCell>
              <TableCell sx={{ color: "white", backgroundColor: "black" }}><b>Designation</b></TableCell>
            </TableRow> */}
          </TableHead>
          <TableBody>
            {data.slice(0, 2).map((user, index) => (
              <TableRow key={index}>
                <TableCell>{`${user.fName} ${user.mName || ""} ${
                  user.lName
                }`}</TableCell>
                <TableCell>{user.postion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SEC_Div;
