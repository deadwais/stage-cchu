import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 240 },
  { field: 'provenance', headerName: 'Provenance', width: 180 },
  { field: 'dateExamen', headerName: 'Date d\'examen', width: 150 },
  { field: 'organe', headerName: 'Organe', width: 150 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1, nomPrenoms: "RAKOTO Randria", provenance: "Externe", dateExamen: "20 Septembre 2024", organe:"Thorax" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", provenance: "Externe", dateExamen: "20 Septembre 2024", organe:"Bras" },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", provenance: "ATU", dateExamen: "20 Septembre 2024", organe:"Epaule droite" },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", provenance: "Service Traumatologie", dateExamen: "20 Septembre 2024", organe:"Cheville droite" },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", provenance: "Service Pneumologie", dateExamen: "20 Septembre 2024", organe:"Thorax" },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", provenance: "ATU", dateExamen: "20 Septembre 2024", organe:"Crane" },
  { id: 7, nomPrenoms: "MARIA", provenance: "Service Traumatologie", dateExamen: "20 Septembre 2024", organe:"Cheville gauche" },

];

export default function Tableau() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}