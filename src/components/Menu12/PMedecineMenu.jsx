"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import MenuDeroulant from "./Menuderoulant";
import { Home } from "@mui/icons-material";

const PMedecineMenu = () => {

  const menuderoulant = [
    {lien:"/pole-medecine/service-medecine-interne/dashboard", titre: "Service Médecine Interne"},
    {lien:"/pole-medecine/dashboard", titre: "Service Cardiologie"},
    {lien:"/pole-medecine/dashboard", titre: "Service Pneumologie Phtisiologie"},
    {lien:"/pole-medecine/dashboard", titre: "Service Maladies Infectieuses"},
    {lien:"/pole-medecine/dashboard", titre: "Service Oncologie"},
    {lien:"/pole-medecine/dashboard", titre: "Service Psychiatrie"},
    {lien:"/pole-medecine/dashboard", titre: "Service Appareillage et Rééducatione"}
  ]

  return (
    <div className="">
      <Link href="/pole-medecine/dashboard" className="menu bg-gray-100 !text-gray-600">
        <Home/>
        Accueil</Link>


      <MenuDeroulant deroulant={menuderoulant} titre="Services"/>
      
       <div className="absolute bottom-4">
          <MenuItem lien="/" titre="Déconnexion" />
      </div>
      
    </div>
  )
}

export default PMedecineMenu