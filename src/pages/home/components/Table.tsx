import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Button, IconButton } from "@mui/material";
import { rows } from "./data";
import Stack from "@mui/material/Stack/Stack";
import Status from "../../../components/Status";
import Action from "./Action";

type Props = {};

const columns: GridColDef[] = [
  {
    field: "Invoice",
    headerName: "Invoice",
    width: 150,
    sortable: false,
    editable: false,
  },
  {
    field: "Date",
    headerName: "Date",
    width: 110,
    filterable: false,
    sortable: false,
    editable: false,
  },
  {
    field: "Category",
    headerName: "Category",
    width: 150,
    sortable: false,
    editable: false,
  },
  {
    field: "Brand",
    headerName: "Brand",
    width: 150,
    editable: false,
    sortable: false,
  },
  {
    field: "Cost",
    headerName: "Cost",
    sortable: false,
    editable: false,
    width: 100,
  },
  {
    field: "Status",
    headerName: "Status",
    sortable: false,
    editable: false,
    width: 150,
    renderCell: (params: GridRenderCellParams<Date>) => (
      <div>
        <Status type={`${params.value}`} />
      </div>
    ),
  },
  {
    field: "Customer",
    headerName: "Customer",
    sortable: false,
    editable: false,
    width: 150,
  },
  {
    field: "Number",
    headerName: "Number",
    sortable: false,
    editable: false,
    width: 150,
  },
  {
    field: "Paid",
    headerName: "Paid?",
    sortable: false,
    editable: false,
    width: 100,
  },
  {
    field: "Actions",
    headerName: "Actions?",
    sortable: false,
    editable: false,
    type: "actions",
    width: 160,
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Action />
    ),
  },
];

const Table = (props: Props) => {
  return (
    <Box sx={{ height: 450, width: "100%", mt: 3 }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        autoHeight
        loading={false}
        sx={{
          border: "0",
          ".MuiDataGrid-cellCheckbox .MuiButtonBase-root , .MuiDataGrid-columnHeaderTitleContainerContent .MuiButtonBase-root":
            {
              color: "#FFFFFF !important",
              fontSize: "1.4rem",
            },
          ".MuiDataGrid-cell": {
            borderColor: "#383F45",
          },
          ".MuiDataGrid-columnSeparator ": {
            display: "none",
          },
          ".MuiDataGrid-footerContainer": {
            border: "unset",
          },
          ".MuiDataGrid-columnHeaders": {
            backgroundColor: "#383F44",
            border: "unset",
          },
        }}
        experimentalFeatures={{ newEditingApi: false }}
      />
    </Box>
  );
};

export default Table;
