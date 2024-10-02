"use client"
import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';



export default function Tableau() {
  const [data, setData] = useState({
    rows: [ { id: 1, nomPrenoms: "RAKOTO Randria", sexe: "M", age: "42", dateConsult: "23 Septembre 2024" },
    { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", sexe: "F", age: "25", dateConsult: "23 Septembre 2024" },
    { id: 3, nomPrenoms: "RAVAOMANANA Louisette", sexe: "F", age: "17", dateConsult: "23 Septembre 2024" },
    { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", sexe: "F", age: "64", dateConsult: "23 Septembre 2024" },
    { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", sexe: "M", age: "61", dateConsult: "23 Septembre 2024" },
    { id: 6, nomPrenoms: "FANOMEZANA Soasoa", sexe: "F", age: "45", dateConsult: "23 Septembre 2024" },
    { id: 7, nomPrenoms: "MARIA", sexe: "F", age: "33", dateConsult: "23 Septembre 2024" } ,],
    columns: [
      { field: 'id', headerName: 'ID', width: 60 },
      { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 400 },
      { field: 'sexe', headerName: 'Sexe', width: 60 },
      { field: 'age', headerName: 'Age', width: 60 },
      { field: 'dateConsult', headerName: 'Date de consultation', width: 150 }
,
  {
         field: 'Action',
            headerName: 'Dossier',
            type: 'actions',
            width: 160,
           getActions: ( ) => [
                // eslint-disable-next-line react/jsx-key
                <GridActionsCellItem
                   icon={<ContentPasteGoIcon  style={{   fontSize: '40px', 
                    borderRadius: '20%', 
                    backgroundColor: '01CC87', 
                    color: 'white',
                    padding: '5px' }} />}
                   
                   
                />  ,
                // eslint-disable-next-line react/jsx-keyfontSize: '40px', borderRadius:'2px', color:'white' 
                /*<GridActionsCellItem
                icon={< DeleteOutlined  style={{ fontSize: '20px' }} />}
               
            
            />  */
            ] 
             
        }


    ]
})
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