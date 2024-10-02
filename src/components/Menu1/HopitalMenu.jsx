"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";


const HopitalMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <MenuItem lien="/dashboard" titre="Accueil" />

      <div className="px-4 py-2 rounded-lg text-white cursor-pointer">
        <span onClick={() => {setIsOpen(!isOpen)}}>Liste des Pôles</span>
      </div>
      
      <div className={isOpen? "" : "hidden"}>
        <MenuItem lien="/pole-chirurgie/dashboard" titre="Pôle Chirurgie" />

        <MenuItem lien="/pole-tete-cou/dashboard" titre="Pôle Tête et Cou" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Pôle Médecine" />

        <MenuItem lien="/pole-mere-enfant/dashboard" titre="Pôle Mère et Enfant" />

        <MenuItem lien="/dashboard" titre="Pôle Anesthésiologie" />

        <MenuItem lien="/pole-paraclinique/dashboard" titre="Pôle Paraclinique" />

        <MenuItem lien="/dashboard" titre="Pôle Santé Publique" />

      </div>
      
      <MenuItem lien="/" titre="Déconnexion" />
    </div>
  )
}

export default HopitalMenu