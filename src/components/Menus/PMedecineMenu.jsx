"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";

const PMedecineMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <MenuItem lien="/pole-medecine/dashboard" titre="Accueil" />

      <div className="px-4 py-2 rounded-lg text-white cursor-pointer">
        <span onClick={() => {setIsOpen(!isOpen)}}>Liste des Services</span>
      </div>

      <div className={isOpen? "" : "hidden"}>
        <MenuItem lien="/pole-medecine/service-medecine-interne/dashboard" titre="Service Médecine Interne" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Service Cardiologie" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Service Pneumologie Phtisiologie" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Service Maladies Infectieuses" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Service Oncologie" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Service Psychiatrie" />

        <MenuItem lien="/pole-medecine/dashboard" titre="Service Appareillage et Rééducation" />
      </div>

      <MenuItem lien="/" titre="Déconnexion" />
      
    </div>
  )
}

export default PMedecineMenu