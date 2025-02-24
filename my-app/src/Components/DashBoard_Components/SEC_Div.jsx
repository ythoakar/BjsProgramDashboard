import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const SEC_Div = ({ data }) => {
  return (
    <div style={{ height: "90%", width: "100%", display: "flex", flexDirection: "column" }}>
      {/* Table */}
      <TableContainer component={Paper} sx={{ maxHeight: "100%", maxWidth: "100%" }}>
        <Table stickyHeader size="small">
          <TableHead>
            <TableRow>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>Designation</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{`${user.fName} ${user.mName || ""} ${user.lName}`}</TableCell>
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
