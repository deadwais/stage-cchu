import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 240 },
  { field: 'provenance', headerName: 'Provenance', width: 180 },
  { field: 'dateIntervention', headerName: 'Date d\'intervention', width: 150 },
  { field: 'typeIntervention', headerName: 'Type d\'intervention', width: 150 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1, nomPrenoms: "RAKOTO Randria", provenance: "Externe", dateIntervention: "20 Septembre 2024", typeIntervention:"Abdomino-pelvien" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", provenance: "Externe", dateIntervention: "20 Septembre 2024", typeIntervention:"Abdomino-pelvien" },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", provenance: "ATU", dateIntervention: "20 Septembre 2024", typeIntervention:"Reins" },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", provenance: "Service Traumatologie", dateIntervention: "20 Septembre 2024", typeIntervention:"Coeur" },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", provenance: "Service Pneumologie", dateIntervention: "20 Septembre 2024", typeIntervention:"Coeur" },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", provenance: "ATU", dateIntervention: "20 Septembre 2024", typeIntervention:"Coeur" },
  { id: 7, nomPrenoms: "MARIA", provenance: "Service Traumatologie", dateIntervention: "20 Septembre 2024", typeIntervention:"Abdomen" },

];

export default function Tableau() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}