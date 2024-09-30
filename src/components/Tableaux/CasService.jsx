import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 20 },
  { field: 'cas', headerName: 'Cas', width: 120 },
  { field: 'date', headerName: 'Date', width: 200 },
  { field: 'etat', headerName: 'Etat', width: 100 },
  { field: 'action', headerName: 'Actions', width: 150 },
];

const rows = [
  {id:1, cas: "Hospitalisation", date: "12 Septembre 2024", etat: "En cours"},

];

export default function Tableau() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}