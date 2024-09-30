import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 300 },
  { field: 'dateNaiss', headerName: 'Date de naissance', width: 150 },
  { field: 'sexe', headerName: 'Sexe', width: 60 },
  { field: 'adresse', headerName: 'Adresse', width: 240 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1, nomPrenoms: "RAKOTO Randria", dateNaiss: "15 Mai 1978", sexe: "M", adresse: "Lot 45H Antarandolo" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", dateNaiss: "1 Janvier 2000", sexe: "F", adresse: "Lot ???? Anyhoany" },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", dateNaiss: "25 Decembre 1954", sexe: "F", adresse: "Anjoma" },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", dateNaiss: "36 Avril 1980", sexe: "F", adresse: "Lot inconnu" },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", dateNaiss: "20 Octobre 1974", sexe: "M", adresse: "Pres Lot I2 45 Ampasambazaha" },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", dateNaiss: "6 Juillet 2012", sexe: "F", adresse: "Any eee" },
  { id: 7, nomPrenoms: "MARIA", dateNaiss: "9 Aout 1999", sexe: "F", adresse: "Ambozontany" },

];

export default function Tableau() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}