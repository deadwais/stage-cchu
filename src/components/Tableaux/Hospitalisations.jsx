import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 300 },
  { field: 'sexe', headerName: 'Sexe', width: 60 },
  { field: 'age', headerName: 'Age', width: 60 },
  { field: 'dateEntree', headerName: 'Date d\'entrée', width: 150 },
  { field: 'dateSortie', headerName: 'Date de sortie', width: 150 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const rows = [
  { id: 1, nomPrenoms: "RAKOTO Randria", sexe: "M", age: "42", dateEntree: "2 Septembre 2024", dateSortie: "6 Septembre 2024" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", sexe: "F", age: "25", dateEntree: "4 Septembre 2024", dateSortie: "5 Septembre 2024"  },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", sexe: "F", age: "17", dateEntree: "4 Septembre 2024", dateSortie: "7 Septembre 2024"  },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", sexe: "F", age: "64", dateEntree: "5 Septembre 2024", dateSortie: "7 Septembre 2024"  },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves",sexe: "M", age: "61", dateEntree: "10 Septembre 2024", dateSortie: "15 Septembre 2024"  },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", sexe: "F", age: "45", dateEntree: "11 Septembre 2024", dateSortie: "21 Septembre 2024"  },
  { id: 7, nomPrenoms: "MARIA", sexe: "F", age: "33", dateEntree: "20 Septembre 2024", dateSortie: "..."  },

];

export default function Tableau() {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} pageSize={2} />
    </Box>
  );
}