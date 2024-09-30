"use client"

import { useState } from "react"

const SBlocInterventionPage = () => {
  const [accordion, setAccordion] = useState(0);

  return (
    <div className="">
      {/* TITRE */}
      <h1 className="text-lg font-semibold mb-2">Dossier d'intervention</h1>
      
      {/* CORPS */}
      <div className="flex flex-col lg:flex-row">

        {/* GAUCHE */}
        <div className="w-full lg:w-2/5 flex flex-col gap-2">
          {/* INFOS */}
          <div className="bg-white p-2 rounded-2xl w-full text-sm flex flex-col">
          <h2 className="font-semibold text-xl">RAKOTO Randria (Homme, 42 ans)</h2>
            <span>Date d'intervention : </span>
            <span>Heure d'entrée en salle : </span>
            <span>Heure de début d'intervention : </span>
            <span>Heure de début d'anesthésie : </span>
            <span>Heure de fin d'intervention : </span>
            <span>Heure de sortie de salle : </span>
            <br />
            <span>Indication : </span>
            <span>Type d'intervention : </span>
            <span>Type d'anesthésie : </span>
            <span>Compte rendu opératoire : </span>
            <span>Observation : </span>
            <span>Issue : </span>
          </div>

          {/* ANTECEDENTS */}
          <div className="bg-white p-2 rounded-2xl w-full text-sm flex flex-col max-h-[250px] overflow-y-auto">
            <h2 className="font-semibold">Antécédents</h2>
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
        <div className="w-full lg:w-3/5 px-2 flex flex-col gap-5">
          {/* EQUIPE OPERATOIRE */}
          <div className="bg-white p-2 rounded-2xl w-full text-sm flex flex-col max-h-[250px] overflow-y-auto">
            <h2 className="font-semibold text-base">Equipe opératoire</h2>
            <span>Chirurgien opérateur</span>
            <span>Aide-opérateur :</span>
            <span>Infirmier :</span>
            <span>Anesthésiste :</span>
            <span>Personnel d'appui :</span>
            <span>Autre :</span>
          </div>

          {/* ACCORDEON */}
          <div className="">
            {/* 1.TRANSFUSION */}
            <div className="w-full border-collapse">
              <div className={accordion === 1 ? "border font-medium p-2 flex justify-between items-center bg-bleu text-white rounded-t-xl" : "border font-medium p-2 flex justify-between items-center bg-white rounded-xl"}>
                <span className={accordion === 1 ? "" : ""}>Transfusions effectuées</span>
                <button onClick={() => {setAccordion(1)}} className={accordion === 1 ? "hidden" : ""}>+</button>
                <button onClick={() => {setAccordion(0)}} className={accordion === 1 ? "" : "hidden"}>-</button>
              </div>
              <div className={accordion === 1 ? "border p-2 h-28 overflow-auto rounded-b-xl" : "hidden"}>
                <div className="">Item 1</div>
                <div className="">Item 2</div>
                <div className="">Item 3</div>
              </div>
            </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default SBlocInterventionPage