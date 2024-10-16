"use client"
import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
/* const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 300 },
  { field: 'dateNaiss', headerName: 'Date de naissance', width: 150 },
  { field: 'sexe', headerName: 'Sexe', width: 60 },
  { field: 'adresse', headerName: 'Adresse', width: 240 },
  { field: 'action', headerName: 'Actions', width: 160 },
];

const Data = [
  { id: 1, nomPrenoms: "RAKOTO Randria", dateNaiss: "15 Mai 1978", sexe: "M", adresse: "Lot 45H Antarandolo" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", dateNaiss: "1 Janvier 2000", sexe: "F", adresse: "Lot ???? Anyhoany" },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", dateNaiss: "25 Decembre 1954", sexe: "F", adresse: "Anjoma" },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", dateNaiss: "36 Avril 1980", sexe: "F", adresse: "Lot inconnu" },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", dateNaiss: "20 Octobre 1974", sexe: "M", adresse: "Pres Lot I2 45 Ampasambazaha" },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", dateNaiss: "6 Juillet 2012", sexe: "F", adresse: "Any eee" },
  { id: 7, nomPrenoms: "MARIA", dateNaiss: "9 Aout 1999", sexe: "F", adresse: "Ambozontany" },

];
*/
export default function Tableau() {
  const router = useRouter();
  const [data, setData] = useState({
    rows: [  { id: 1, nomPrenoms: "RAKOTO Randria", dateNaiss: "15 Mai 1978", sexe: "M", adresse: "Lot 45H Antarandolo" },
    { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", dateNaiss: "1 Janvier 2000", sexe: "F", adresse: "Lot ???? Anyhoany" },
    { id: 3, nomPrenoms: "RAVAOMANANA Louisette", dateNaiss: "25 Decembre 1954", sexe: "F", adresse: "Anjoma" },
    { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", dateNaiss: "36 Avril 1980", sexe: "F", adresse: "Lot inconnu" },
    { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", dateNaiss: "20 Octobre 1974", sexe: "M", adresse: "Pres Lot I2 45 Ampasambazaha" },
    { id: 6, nomPrenoms: "FANOMEZANA Soasoa", dateNaiss: "6 Juillet 2012", sexe: "F", adresse: "Any eee" },
    { id: 7, nomPrenoms: "MARIA", dateNaiss: "9 Aout 1999", sexe: "F", adresse: "Ambozontany" },],
    columns: [
      { field: 'id', headerName: 'ID', width: 60 },
     
      { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 300 },
      { field: 'dateNaiss', headerName: 'Date de naissance', width: 150 } ,
     
      { field: 'sexe', headerName: 'Sexe', width: 60 },
      { field: 'adresse', headerName: 'Adresse', width: 240 }

,
  {
         field: 'Action',
            headerName: 'Dossier',
            type: 'actions',
            width: 160,
           getActions: (params) => [
                // eslint-disable-next-line react/jsx-key
              <Link  href={`/pole-chirurgie/service-bloc/dossier-medical?id=${params.id}`} >   <GridActionsCellItem
                 icon={<ContentPasteGoIcon  style={{   fontSize: '40px', 
                    borderRadius: '20%', 
                    backgroundColor: '01CC87', 
                    color: 'white',
                    padding: '5px' }}  />}
                   
               // onClick={() =>Naviguer(params.row.id)} 
                /> </Link>   ,
                // eslint-disable-next-line react/jsx-keyfontSize: '40px', borderRadius:'2px', color:'white' 
                /*<GridActionsCellItem
                icon={< DeleteOutlined  style={{ fontSize: '20px' }} />}
               
            
            />  */
            ] 
             
        }


    ]
})
const Naviguer =(id)=>{
  router.push(`/pole-chirurgie/service-bloc/dossier-intervention?id=${id}`);
}
const getRowId = (row) =>{ 
  return row.id
}


  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
                                className='dataGrid'
                                getRowId={getRowId}
                                rows={data.rows}
                                columns={data.columns}
                                initialState={{
                                    pagination: {
                                        paginationModel: {
                                            pageSize: 5,
                                        },
                                    },
                                }}
                                slots={{ toolbar: GridToolbar }}
                                slotProps={{
                                    toolbar: {
                                        showQuickFilter: true,
                                        quickFilterProps: { debounceMs: 500 },
                                    },
                                }}
                                pageSizeOptions={[5]}
                                checkboxSelection
                                disableRowSelectionOnClick
                                disableDensitySelector
                                disableColumnSelector />
    </Box>
  );
}


