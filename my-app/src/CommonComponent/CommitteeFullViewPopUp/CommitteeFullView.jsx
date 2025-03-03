import React from "react";
import { Box, Typography, Modal, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download"; // Import Download Icon

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%", 
  maxWidth: "1000px", 
  maxHeight: "80vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
};

// Function to normalize field names
const normalizeData = (user) => ({
  name: user.name || "N/A",
  committee: user.Committee || user.committeeName || "N/A",
  designation: user.Designation || user.designation || "N/A",
  state: user.statename || user.stateName || "N/A",
  mobile: user.mobileNo?.$numberLong || "N/A",
});

export default function CommitteeFullView({ open, handleClose, data, title }) {
  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="modal-title">
      <Box sx={style}>
        {/* Modal Header */}
        <Box display="flex" justifyContent="center" alignItems="center" position="relative" mb={2}>
  {/* Centered Title */}
  <Typography id="modal-title" variant="h5" fontWeight="bold" textAlign="center">
    {title}
  </Typography>

  {/* Icons Positioned on the Right */}
  <Box sx={{ position: "absolute", right: 0, display: "flex", alignItems: "center", gap: 1 }}>
    {/* <IconButton sx={{ color: "blue" }}>
      <DownloadIcon sx={{ fontSize: "26px" }} />
    </IconButton> */}
    <IconButton onClick={handleClose} sx={{ color: "red" }}>
      <CloseIcon sx={{ fontSize: "28px" }} />
    </IconButton>
  </Box>
</Box>


        {/* Table */}
        <TableContainer component={Paper} sx={{ flexGrow: 1, maxHeight: "60vh", overflow: "auto", borderRadius: "8px" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontWeight: "bold", color: "white", backgroundColor: "black" }}>Name</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white", backgroundColor: "black" }}>Committee</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white", backgroundColor: "black" }}>Designation</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white", backgroundColor: "black" }}>State</TableCell>
                <TableCell sx={{ fontWeight: "bold", color: "white", backgroundColor: "black" }}>Mobile No</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((user, index) => {
                const normalizedUser = normalizeData(user);
                return (
                  <TableRow key={index} hover>
                    <TableCell>{normalizedUser.name}</TableCell>
                    <TableCell>{normalizedUser.committee}</TableCell>
                    <TableCell>{normalizedUser.designation}</TableCell>
                    <TableCell>{normalizedUser.state}</TableCell>
                    <TableCell>{normalizedUser.mobile}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Modal>
  );
}
