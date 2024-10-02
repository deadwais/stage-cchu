"use client"

import { useState } from "react"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import ScienceIcon from '@mui/icons-material/Science';

import MonitorWeightOutlinedIcon from '@mui/icons-material/MonitorWeightOutlined';

import BloodtypeOutlinedIcon from '@mui/icons-material/BloodtypeOutlined';
import LocalHospitalOutlinedIcon from '@mui/icons-material/LocalHospitalOutlined';
import MedicationLiquidIcon from '@mui/icons-material/MedicationLiquid'


import MonitorHeartTwoToneIcon from '@mui/icons-material/MonitorHeartTwoTone';
import MedicationLiquidTwoToneIcon from '@mui/icons-material/MedicationLiquidTwoTone';
import BloodtypeTwoToneIcon from '@mui/icons-material/BloodtypeTwoTone';
import SaveTwoToneIcon from '@mui/icons-material/SaveTwoTone';
import ScienceTwoToneIcon from '@mui/icons-material/ScienceTwoTone';
import LocalHotelTwoToneIcon from '@mui/icons-material/LocalHotelTwoTone';
import ThermostatAutoTwoToneIcon from '@mui/icons-material/ThermostatAutoTwoTone';

const SMedecineInterneHospitalisationPage = () => {
  const [accordion, setAccordion] = useState(0);

  return (
    <div className="">
      {/* TITRE */}
      <h1 className="text-lg font-semibold mb-2">Dossier d'hospitalisation</h1>
      
      {/* CORPS */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* GAUCHE */}
        <div className="flex flex-col gap-4 w-full lg:w-2/5">
          {/* INFOS */}
          <div className="bg-white p-4 rounded-2xl w-full text-sm flex flex-col">
            <h2 className="font-semibold text-xl">RAKOTO Randria (Homme, 42 ans)</h2>
            <span>Chambre : </span>
            <span>Lit : </span>
            <span>Date d'admission : </span>
            <span>Type d'admission : </span>
            <span>Motif d'entrée : </span>
            <span>Date de sortie : </span>
            <span>Type de sortie : </span>
            <span>Diagnostic de sortie : </span>
            <span>Observation à la sortie : </span>
          </div>

          {/* ANTECEDENTS */}
          <div className="bg-white p-2 rounded-2xl w-full text-sm flex flex-col max-h-[360px] overflow-y-auto">
            <h2 className="font-semibold text-lg">Antécédents</h2>
            <h3 className="font-medium">Antécédents personnels</h3>
            <span>Médicaux : Néant</span>
            <span>Chirurgicaux :</span>
            <span>Mode de vie :</span>
            <span>Habitude toxique :</span>
            <span>Allergie :</span>
            <span>Autre :</span>
            
            <h3 className="font-medium">Antécédents familiales</h3>
            <span>(Mère)</span>
            <span>Chirurgicaux :</span>
            <span>(Père)</span>
            <span>Chirurgicaux :</span>
          </div>
        </div>

        {/* DROITE */}
        {/* ACCORDEON */}
        <div className="w-full lg:w-3/5">

          {/* 1.VISITES */}
          <div className="w-full border-collapse">
            <div className={accordion === 1 ? "border font-medium p-2 flex justify-between items-center rounded-t-xl bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white rounded-t-xl"}>
            <button ><AddCircleOutlinedIcon/></button>
             <span className={accordion === 1 ? "" : ""}>Visites effectuées   <LocalHotelTwoToneIcon /> </span>
              <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 1 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button> 

            </div>
         
            <div className={accordion === 1 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1 fffff fffff</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
  </div>
          </div>
          {/* 2.PARAMETRES */}
          <div className="w-full border-collapse">
  {/* Accordéon header */}
  <div className={accordion === 2 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
  <button ><AddCircleOutlinedIcon/></button>
    <span>Paramètres pris <ThermostatAutoTwoToneIcon /> </span>
    
    <button onClick={() => { setAccordion(2) }} className={accordion === 2 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
    <button onClick={() => { setAccordion(0) }} className={accordion === 2 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
   
  </div>

  {/* Accordéon body avec scrolling */}
  <div className={accordion === 2 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
  </div>
</div>

       {/* 2.PARAMETRES   <div className="w-full border-collapse">
            <div className={accordion === 2 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
              <span className={accordion === 2 ? "" : ""}>Paramètres pris</span>
              <button onClick={() => {setAccordion(2)}} className={accordion === 2 ? "hidden" : ""}>+</button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 2 ? "" : "hidden"}>-</button>
            </div>
            <div className={accordion === 2 ? "border p-2 h-28 overflow-auto" : "hidden"}>
              <div className="">Item 1</div>
              <div className="">Item 2</div>
              <div className="">Item 3</div>
            </div>
          </div>*/} 

          {/* 3.LABO */}
          <div className="w-full border-collapse">
            <div className={accordion === 3 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
            <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}><AddCircleOutlinedIcon/></button>
              <span className={accordion === 3 ? "" : ""}>Bilans labo effectués <ScienceTwoToneIcon/> </span>
              <button onClick={() => {setAccordion(3)}} className={accordion === 3 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 3 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
             
            <div className={accordion === 3 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
          </div>
          </div>
          {/* 4.RADIO */}
          <div className="w-full border-collapse">
            <div className={accordion === 4 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
            <button ><AddCircleOutlinedIcon/></button> <span className={accordion === 4 ? "" : ""}>Examens radio effectuées <SaveTwoToneIcon/> </span>
              <button onClick={() => {setAccordion(4)}} className={accordion === 4 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 4 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
           
            <div className={accordion === 4 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
          </div>
          </div>

          {/* 5.ECHO */}
          <div className="w-full border-collapse">
            <div className={accordion === 5 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
            <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}><AddCircleOutlinedIcon/></button>
              <span className={accordion === 5 ? "" : ""}>Examens echo effectuées <SaveTwoToneIcon/> </span>
              <button onClick={() => {setAccordion(5)}} className={accordion === 5 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 5 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
              
            <div className={accordion === 5 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
          </div>
          </div>

          {/* 6.TRANSFUSION */}
          <div className="w-full border-collapse">
            <div className={accordion === 6 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
            <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}><AddCircleOutlinedIcon/></button>
              <span className={accordion === 6 ? "" : ""}>Transfusions effectuées <BloodtypeTwoToneIcon /> </span>
              <button onClick={() => {setAccordion(6)}} className={accordion === 6 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 6 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
              
            <div className={accordion ===6  ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
          </div>
          </div>

          {/* 7.TRAITEMENT */}
          <div className="w-full border-collapse">
            <div className={accordion === 7 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white"}>
            <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}><AddCircleOutlinedIcon/></button>
              <span className={accordion === 7 ? "" : ""}>Traitements préscrits <MedicationLiquidTwoToneIcon/> </span>
              <button onClick={() => {setAccordion(7)}} className={accordion === 7 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 7 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
              
            <div className={accordion === 7 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
          </div>
          </div>

          {/* 8.INTERVENTION */}
          <div className="w-full border-collapse">
            <div className={accordion === 8 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white" : "border font-medium p-2 flex justify-between items-center bg-white rounded-b-xl"}>
            <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}><AddCircleOutlinedIcon/></button>
              <span className={accordion === 8 ? "" : ""}>Interventions chirurgicales effectuées <MonitorHeartTwoToneIcon/> </span>
              <button onClick={() => {setAccordion(8)}} className={accordion === 8 ? "hidden" : ""}><KeyboardArrowUpOutlinedIcon /></button>
              <button onClick={() => {setAccordion(0)}} className={accordion === 8 ? "" : "hidden"}><KeyboardArrowDownOutlinedIcon/></button>
            </div>
              
            <div className={accordion === 8 ? "border p-2 max-h-28 overflow-y-auto" : "hidden"}>
    <div className="space-y-2">
      <div  className="p-2 bg-gray-100 rounded-lg">Item 1</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 2</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 3</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 4</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 5</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 6</div>
      <div className="p-2 bg-gray-100 rounded-lg">Item 7</div>
    </div>
          </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default SMedecineInterneHospitalisationPage