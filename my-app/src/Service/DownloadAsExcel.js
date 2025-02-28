// import * as XLSX from 'xlsx';

// // Function to handle downloading data as an Excel file
// export const downloadAsExcel = (data, fileName = 'downloaded_data.xlsx') => {
//   if (data && data.length > 0) {
//     // Convert the JSON data to a worksheet
//     const ws = XLSX.utils.json_to_sheet(data);
//     const wb = XLSX.utils.book_new();

//     // Append the worksheet to the workbook
//     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

//     // Write the file
//     XLSX.writeFile(wb, fileName);

//     // After the download, reset the download state
//     // setDownload(false);
//   } else {
//     alert('No data to download');
//   }
// };
import * as XLSX from 'xlsx';

// Function to beautify the Excel sheet with committee-specific background colors
export const downloadAsExcel = (data, fileName = 'beautified_data.xlsx') => {
  if (data && data.length > 0) {
    // Convert JSON data to a worksheet
    const ws = XLSX.utils.json_to_sheet(data);

    // Define the committee-specific background colors
    const committeeColors = {
      "Governing Committee": "FF0000", // Red
      "Operations Committee": "FFFF00", // Yellow
      "National Program Head": "FFA500", // Orange
      "Ex-Officio Members": "ADD8E6", // Light Blue
      // Add other committees with their specific colors as needed
    };

    // Apply header row styling (bold, background color, text alignment)
    const range = XLSX.utils.decode_range(ws['!ref']); // Get the range of data in the sheet
    for (let col = range.s.c; col <= range.e.c; col++) {
      const cell = ws[XLSX.utils.encode_cell({ r: 0, c: col })]; // Header row
      if (cell) {
        cell.s = {
          font: { bold: true, color: { rgb: 'FFFFFF' } }, // White text on the header
          fill: { fgColor: { rgb: '4F81BD' } }, // Background color: blue
          alignment: { horizontal: 'center', vertical: 'center' },
        };
      }
    }

    // Apply row data styling with committee-specific background color
    for (let row = range.s.r + 1; row <= range.e.r; row++) {
      const committeeName = data[row - 1].committeeName; // Get the committeeName for the current row
      const rowColor = committeeColors[committeeName] || "FFFFFF"; // Default to white if no specific color is found

      for (let col = range.s.c; col <= range.e.c; col++) {
        const cell = ws[XLSX.utils.encode_cell({ r: row, c: col })];
        if (cell) {
          cell.s = {
            alignment: { horizontal: 'center', vertical: 'center', wrapText: true }, // Text wrapping and center alignment
            border: { // Add borders to all cells
              top: { style: 'thin', color: { rgb: '000000' } },
              left: { style: 'thin', color: { rgb: '000000' } },
              bottom: { style: 'thin', color: { rgb: '000000' } },
              right: { style: 'thin', color: { rgb: '000000' } },
            },
            fill: { fgColor: { rgb: rowColor } }, // Set the background color based on the committee
          };
        }
      }
    }

    // Adjust column widths (Auto-size)
    const columnWidths = [];
    for (let col = range.s.c; col <= range.e.c; col++) {
      let maxLength = 0;
      for (let row = range.s.r; row <= range.e.r; row++) {
        const cell = ws[XLSX.utils.encode_cell({ r: row, c: col })];
        if (cell && cell.v) {
          maxLength = Math.max(maxLength, cell.v.toString().length);
        }
      }
      columnWidths.push({ wpx: Math.min(maxLength * 10, 250) }); // Minimum width: 10px, max: 250px
    }
    ws['!cols'] = columnWidths; // Apply the column widths

    // Create a new workbook and append the sheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    // Write the file with applied styles
    XLSX.writeFile(wb, fileName);
  } else {
    alert('No data to download');
  }
};
