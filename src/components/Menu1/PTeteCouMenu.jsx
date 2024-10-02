"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";

const PTeteCouMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <MenuItem lien="/pole-tete-cou/dashboard" titre="Accueil" />

      <div className="px-4 py-2 rounded-lg text-white cursor-pointer">
        <span onClick={() => {setIsOpen(!isOpen)}}>Liste des Services</span>
      </div>

      <div className={isOpen? "" : "hidden"}>
        <MenuItem lien="/pole-tete-cou/dashboard" titre="Service Neurochirurgie" />

        <MenuItem lien="/pole-tete-cou/service-ophtalmologie/dashboard" titre="Service Ophtalmologie" />
      </div>

      <MenuItem lien="/" titre="Déconnexion" />
    </div>
  )
}

export default PTeteCouMenu