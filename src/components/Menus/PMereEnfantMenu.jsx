"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem"

const PMereEnfantMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
      <MenuItem lien="/pole-mere-enfant/dashboard" titre="Accueil"/>

      <div className="px-4 py-2 rounded-lg text-white cursor-pointer">
        <span onClick={() => {setIsOpen(!isOpen)}}>Liste des Services</span>
      </div>

      <div className={isOpen? "" : "hidden"}>
        <MenuItem lien="/pole-mere-enfant/service-gynecologie/dashboard" titre="Service Gynécologie-Obstétrique"/>
        <MenuItem lien="/pole-mere-enfant/dashboard" titre="Service Pédiatrie"/>
        <MenuItem lien="/pole-mere-enfant/dashboard" titre="Service Néonatalogie (interne)"/>
        <MenuItem lien="/pole-mere-enfant/dashboard" titre="Service Néonatalogie (externe)"/>
      </div>

      <MenuItem lien="/" titre="Déconnexion" />
    </div>

    
  )
}

export default PMereEnfantMenu