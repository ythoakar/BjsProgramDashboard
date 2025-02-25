import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const SEC_Div = ({ data, heading, navigateTo }) => {
const navigate = useNavigate()


function navigatePage(){
if(heading == "State Executive Committee"){
  navigate("/SEC")
}
}


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button
        variant="contained"
        onClick={navigatePage}
        sx={{
          backgroundColor: "#FFC107",
          color: "black",
          fontWeight: "bold",
          marginBottom: "10px",
          textTransform: "none",
          alignSelf: "center",
          padding: "4px 16px",
          minHeight: "18px",
          fontSize: "14px",
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
          <TableBody>
            {data.slice(0, 2).map((user, index) => (
              <TableRow key={index}>
                <TableCell sx={{ padding: "4px" }}>{`${user.fName} ${
                  user.mName || ""
                } ${user.lName}`}</TableCell>
                <TableCell sx={{ padding: "4px" }}>{user.postion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SEC_Div;
