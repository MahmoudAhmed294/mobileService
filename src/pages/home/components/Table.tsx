import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Box, Button, IconButton } from "@mui/material";
import { rows } from "./data";
import Stack from "@mui/material/Stack/Stack";
import Status from "../../../components/Status";
import Action from "./Action";
import { OrderResponse } from "../../../api/types";

type Props = {
  isLoading:boolean;
  data:OrderResponse[];
};

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Invoice",
    width: 100,
    sortable: false,
    editable: false,
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    filterable: false,
    sortable: false,
    editable: false,
  },
  {
    field: "category",
    headerName: "Category",
    width: 190,
    sortable: false,
    editable: false,
  },
  {
    field: "brand",
    headerName: "Brand",
    width: 190,
    editable: false,
    sortable: false,
    renderCell: (params: GridRenderCellParams<any>) => (
      <div>
        {params.value.modelName }
      </div>
    ),

  },
  {
    field: "cost",
    headerName: "Cost",
    sortable: false,
    editable: false,
    width: 80,
  },
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    editable: false,
    width: 180,
    renderCell: (params: GridRenderCellParams<Date>) => (
      <div>
        <Status type={`${params.value}`} />
      </div>
    ),
  },
  {
    field: "customer",
    headerName: "Customer",
    sortable: false,
    editable: false,
    width: 150,
  },
  {
    field: "phone",
    headerName: "Phone number",
    sortable: false,
    editable: false,
    width: 150,
  },
  {
    field: "paid",
    headerName: "Paid?",
    sortable: false,
    editable: false,
    width: 70,
    renderCell: (params: GridRenderCellParams<boolean>) => (
      <div>
        {params.value === true ? "Paid" : "Unpaid"}
      </div>
    ),

  },
  {
    field: "actions",
    headerName: "Actions?",
    sortable: false,
    editable: false,
    type: "actions",
    width: 100,
    renderCell: (params: GridRenderCellParams<Date>) => (
      <Action />
    ),
  },
];

const Table = ({isLoading ,data}: Props) => {
  return (
    <Box sx={{ height: 450, width: "100%", mt: 3 }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={6}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
        autoHeight
        loading={isLoading}
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
