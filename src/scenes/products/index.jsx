import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataProducts } from "../../data/mockData";
import Header from "../../components/Header";

const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "nombre",
      headerName: "nombre",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "precio",
      headerName: "Precio",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.precio}
        </Typography>
      ),
    },
    {
      field: "fecha_actualizacion",
      headerName: "Fecha_actualizacion",
      flex: 1,
    },
    {
      field: "categoria",
      headerName: "Categoria",
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
        }}
      >
        <DataGrid checkboxSelection rows={mockDataProducts} columns={columns} />
      </Box>
    </Box>
  );
};

export default Products;
