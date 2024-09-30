import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 300 },
  { field: 'fonction', headerName: 'Fonction', width: 240 },
  { field: 'sexe', headerName: 'Sexe', width: 60 },
  { field: 'tel', headerName: 'Télephone', width: 150 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1, nomPrenoms: "RAKOTO Randria", fonction: "Major de service", sexe: "M", tel: "0385697410" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", fonction: "Medecin Chef", sexe: "F", tel: "0322552255" },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", fonction: "Medecin", sexe: "F", tel: "0333333333" },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", fonction: "Sage-femme", sexe: "F", tel: "0347182600" },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", fonction: "Infirmier", sexe: "M", tel: "0385961204" },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", fonction: "Sage-femme", sexe: "F", tel: "0345896798" },
  { id: 7, nomPrenoms: "MARIA", fonction: "Personnel d'appui", sexe: "F", tel: "0321503215" },

];

export default function Tableau() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}