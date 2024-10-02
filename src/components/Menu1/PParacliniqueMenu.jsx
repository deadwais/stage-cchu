"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";

const PParacliniqueMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <MenuItem lien="/pole-paraclinique/dashboard" titre="Accueil" />

      <div className="px-4 py-2 rounded-lg text-white cursor-pointer">
        <span onClick={() => {setIsOpen(!isOpen)}}>Liste des Services</span>
      </div>

      <div className={isOpen? "" : "hidden"}>
        <MenuItem lien="/pole-paraclinique/service-imagerie/dashboard" titre="Service Imagerie Médicale" />
      </div>

      <MenuItem lien="/" titre="Déconnexion" />
    </div>
  )
}

export default PParacliniqueMenu