"use client"
import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';



export default function Tableau() {
  const [data, setData] = useState({
    rows: [{ id: 1, nomPrenoms: "RAKOTO Randria", provenance: "Externe", dateExamen: "20 Septembre 2024", organe:"Abdomino-pelvien" },
    { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", provenance: "Externe", dateExamen: "20 Septembre 2024", organe:"Abdomino-pelvien" },
    { id: 3, nomPrenoms: "RAVAOMANANA Louisette", provenance: "ATU", dateExamen: "20 Septembre 2024", organe:"Reins" },
    { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", provenance: "Service Traumatologie", dateExamen: "20 Septembre 2024", organe:"Coeur" },
    { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", provenance: "Service Pneumologie", dateExamen: "20 Septembre 2024", organe:"Coeur" },
    { id: 6, nomPrenoms: "FANOMEZANA Soasoa", provenance: "ATU", dateExamen: "20 Septembre 2024", organe:"Coeur" },
    { id: 7, nomPrenoms: "MARIA", provenance: "Service Traumatologie", dateExamen: "20 Septembre 2024", organe:"Abdomen" },],
    columns : [
      { field: 'id', headerName: 'ID', width: 60 },
      { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 240 },
      { field: 'provenance', headerName: 'Provenance', width: 180 },
      { field: 'dateExamen', headerName: 'Date d\'examen', width: 150 },
      { field: 'organe', headerName: 'Organe', width: 150 },
      { field: 'action', headerName: 'Actions', width: 160 }   
,
  {
         field: 'Action',
            headerName: 'Dossier',
            type: 'actions',
            width: 160,
           getActions: ( ) => [
                // eslint-disable-next-line react/jsx-key
                <GridActionsCellItem
                   icon={<InventoryOutlinedIcon style={{   fontSize: '40px', 
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