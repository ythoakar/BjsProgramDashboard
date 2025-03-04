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
import { useDropdown } from "../../Service/DropdownProvider";
import { message } from "antd";

const SEC_Div = ({ data, heading, navigateTo }) => {
  const { selectedOption } = useDropdown();
  console.log("dataaa ", data);
  const navigate = useNavigate();

  function navigatePage() {
    if (heading == "National Executive Committee") {
      navigate("/NEC");
    }

    if (
      selectedOption.BjsStateName == "India" &&
      heading == "State Executive Committee"
    ) {
      alert("Please select a state.");
      return;
    } else if (heading == "State Executive Committee") {
      navigate("/SEC");
    }
    if (
      heading == "Regional Executive Committee" ||
      heading == "District Executive Committee"
    ) {
      alert("Coming Soon...")
      return;
    }
  }

  if (heading === "Regional Executive Committee" || heading === "District Executive Committee") {
    return (<>
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

      
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Coming Soon...</p>
      </div>
    </>);
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

export default SEC_Div;
