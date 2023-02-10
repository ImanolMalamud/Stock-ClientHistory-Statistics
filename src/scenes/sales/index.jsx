import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockPurchases } from "../../data/mockData";
import Header from "../../components/Header";

const Sales = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "productos",
      headerName: "Productos",
      flex: 1,
      minWidth: 650,
      renderCell: (params) => {
        let prodNames = []
        params.row.productos.forEach(prod => {
          prodNames.push(prod.nombre)
        })
        return (
          <Typography color={colors.greenAccent[500]}>
            {prodNames.join(", ")}
          </Typography>
        )
      },
    },
    {
      field: "total",
      headerName: "Total",
      flex: 1,
      maxWidth: 100,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.total}
        </Typography>
      ),
    },
    {
      field: "fecha",
      headerName: "Fecha",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Productos" subtitle="Todos los Productos" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockPurchases}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Sales;
