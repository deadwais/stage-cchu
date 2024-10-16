"use client";
import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import Link from 'next/link';
/* const columns = [
  { field: 'id', headerName: 'ID', width: 60 },
  { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 240 },
  { field: 'provenance', headerName: 'Provenance', width: 180 },
  { field: 'dateIntervention', headerName: 'Date d\'intervention', width: 150 },
  { field: 'typeIntervention', headerName: 'Type d\'intervention', width: 150 },
  {
    field: 'action', 
    headerName: 'Actions', 
    width: 160, 
    type: 'actions',
    getActions: (params) => [
      <GridActionsCellItem
        icon={
          <ContentPasteGoIcon 
            style={{
              fontSize: '40px',
              borderRadius: '20%',
              backgroundColor: '#01CC87',
              color: 'white',
              padding: '5px',
            }} 
            onClick={() =>Naviguer(params.row.id)}
          />
        }
      />
    ],
  },
]; */

const rows = [
  { id: 1, nomPrenoms: "RAKOTO Randria", provenance: "Externe", dateIntervention: "20 Septembre 2024", typeIntervention: "Abdomino-pelvien" },
  { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", provenance: "Externe", dateIntervention: "20 Septembre 2024", typeIntervention: "Abdomino-pelvien" },
  { id: 3, nomPrenoms: "RAVAOMANANA Louisette", provenance: "ATU", dateIntervention: "20 Septembre 2024", typeIntervention: "Reins" },
  { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", provenance: "Service Traumatologie", dateIntervention: "20 Septembre 2024", typeIntervention: "Coeur" },
  { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", provenance: "Service Pneumologie", dateIntervention: "20 Septembre 2024", typeIntervention: "Coeur" },
  { id: 6, nomPrenoms: "FANOMEZANA Soasoa", provenance: "ATU", dateIntervention: "20 Septembre 2024", typeIntervention: "Coeur" },
  { id: 7, nomPrenoms: "MARIA", provenance: "Service Traumatologie", dateIntervention: "20 Septembre 2024", typeIntervention: "Abdomen" },
];

export default function Tableau() {

  const [data, setData] = useState({
    rows: rows,
    columns:[
      { field: 'id', headerName: 'id', width: 60 },
      { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 240 },
      { field: 'provenance', headerName: 'Provenance', width: 180 },
      { field: 'dateIntervention', headerName: 'Date d\'intervention', width: 150 },
      { field: 'typeIntervention', headerName: 'Type d\'intervention', width: 150 },
      {
        field: 'action', 
        headerName: 'Actions', 
        width: 160, 
        type: 'actions',
        getActions: (params) => [
        <Link  href={`/pole-chirurgie/service-bloc/dossier-interv?id=${params.id}`} >    <GridActionsCellItem
            icon={
              <ContentPasteGoIcon 
                style={{
                  fontSize: '40px',
                  borderRadius: '20%',
                  backgroundColor: '#01CC87',
                  color: 'white',
                  padding: '5px',
                }} 
               // onClick={() =>Naviguer(params.row.id)}
              />
            }
          /></Link>  
        ],
      },
    ] ,
  });
  const Naviguer =(id)=>{
    router.push(`/pole-chirurgie/service-bloc/dossier-interv?id=${id}`);
  }
  const getRowId = (row) => row.id;

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        className="dataGrid"
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
        disableColumnSelector
      />
    </Box>
  );
}











/*
import { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid"
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
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
  const [data, setData] = useState({
    rows: [ { field: 'id', headerName:'id', width: 60 },
    { field: 'nomPrenoms', headerName: 'Nom et Prénoms', width: 240 },
    { field: 'provenance', headerName: 'Provenance', width: 180 },
    { field: 'dateIntervention', headerName: 'Date d\'intervention', width: 150 },
    { field: 'typeIntervention', headerName: 'Type d\'intervention', width: 150 },
    { field: 'action', headerName: 'Actions', width: 160 }, ],
    columns: [
      { id: 1, nomPrenoms: "RAKOTO Randria", provenance: "Externe", dateIntervention: "20 Septembre 2024", typeIntervention:"Abdomino-pelvien" },
      { id: 2, nomPrenoms: "RALAVANARANA Tsihitizaiataoazy Fatenalavaloatra", provenance: "Externe", dateIntervention: "20 Septembre 2024", typeIntervention:"Abdomino-pelvien" },
      { id: 3, nomPrenoms: "RAVAOMANANA Louisette", provenance: "ATU", dateIntervention: "20 Septembre 2024", typeIntervention:"Reins" },
      { id: 4, nomPrenoms: "ANDRIAFAHATANY Tsihaiko", provenance: "Service Traumatologie", dateIntervention: "20 Septembre 2024", typeIntervention:"Coeur" },
      { id: 5, nomPrenoms: "RAZAFINDRAZAFY Jean Yves", provenance: "Service Pneumologie", dateIntervention: "20 Septembre 2024", typeIntervention:"Coeur" },
      { id: 6, nomPrenoms: "FANOMEZANA Soasoa", provenance: "ATU", dateIntervention: "20 Septembre 2024", typeIntervention:"Coeur" },
      { id: 7, nomPrenoms: "MARIA", provenance: "Service Traumatologie", dateIntervention: "20 Septembre 2024", typeIntervention:"Abdomen" },  
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
          /*  ] 
             
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
} */