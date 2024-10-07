"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import MenuDeroulant from "./Menuderoulant";
import { Home } from "@mui/icons-material";


const HopitalMenu = () => {

  const menuderoulant = [
    {lien:"/pole-chirurgie/dashboard", titre: "Pôle chirurgie"},
    {lien:"/pole-tete-cou/dashboard", titre: "Pôle Tête et Cou"},
    {lien:"/pole-medecine/dashboard", titre: "Pôle Médecine"},
    {lien:"/pole-mere-enfant/dashboard", titre: "Pôle Mère et Enfant"},
    {lien:"/dashboard", titre: "Pôle Anesthésiologie"},
    {lien:"/pole-paraclinique/dashboard", titre: "Pôle Paraclinique"},
    {lien:"/dashboard", titre: "Pôle Pôle Santé Publique"}
  ]

  return (
    <div>
        <Link href="/dashboard" className="menu bg-gray-200 !text-vert ">
          <Home />
          Accueil</Link>

        <MenuDeroulant deroulant={menuderoulant} titre="Pôles"/>
    
    </div>
  )
}

export default HopitalMenu