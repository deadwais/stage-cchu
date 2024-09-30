import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'libelle', headerName: 'Libellé', width: 200 },
  { field: 'type', headerName: 'Type', width: 150 },
  { field: 'posologie', headerName: 'Posologie', width: 100 },
  { field: 'frequence', headerName: 'Fréquence', width: 100 },
  { field: 'quantite', headerName: 'Quantité', width: 100 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1,  },
  { id: 2,  },
  { id: 3,  },

];

export default function Tableau() {
  return (
    <Box sx={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}