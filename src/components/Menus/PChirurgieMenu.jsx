"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";

const PChirurgieMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <MenuItem lien="/pole-chirurgie/dashboard" titre="Accueil" />

      <div className="px-4 py-2 rounded-lg text-white cursor-pointer">
        <span onClick={() => {setIsOpen(!isOpen)}}>Liste des Services</span>
      </div>

      <div className={isOpen? "" : "hidden"}>
        <MenuItem lien="/pole-chirurgie/dashboard" titre="Service Orthopédie Traumatologie" />

        <MenuItem lien="/pole-chirurgie/dashboard" titre="Service Chirurgie Viscérale" />

        <MenuItem lien="/pole-chirurgie/service-bloc/dashboard" titre="Service Bloc Opératoire" />
      </div>

      <MenuItem lien="/" titre="Déconnexion" />
      
    </div>
  )
}

export default PChirurgieMenu