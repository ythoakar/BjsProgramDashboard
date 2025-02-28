import React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";










const CommitteeCard = ({ data, heading }) => {
    return (
        <div style={{ height: "90%", width: "100%", display: "flex", flexDirection: "column", }}>
        {/* Table */}
  
  
        <TableContainer component={Paper} sx={{ maxHeight: "100%", maxWidth: "100%", display:"flex",flexDirection:"column" }}>
  
        
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
                                    <TableCell sx={{ padding: "4px" }}>{`${user.name}`}</TableCell>
                                    <TableCell sx={{ padding: "4px" }}>
                                      {user.designation}
                                    </TableCell>
                                  </TableRow>
                      ))}
                    </TableBody>
          </Table>
        </TableContainer>
  
       
      </div>
    );
  };

  export default CommitteeCard;

  
  // Example usage:
  // <InfoCard heading="Regional Executive Committee" number={28} />
  