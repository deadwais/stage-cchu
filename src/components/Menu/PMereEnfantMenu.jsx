"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem"
import Menuderoulant from "./Menuderoulant";
import Link from "next/link";
import { Home } from "@mui/icons-material";

const PMereEnfantMenu = () => {

  const menuderoulant = [
    {lien:"/pole-mere-enfant/service-gynecologie/dashboard", titre: "Service Gynécologie-Obstétrique"},
    {lien:"/pole-mere-enfant/dashboard", titre: "Service Pédiatrie"},
    {lien:"/pole-mere-enfant/dashboard", titre: "Service Néonatalogie (interne)"},
    {lien:"/pole-mere-enfant/dashboard", titre: "Service Néonatalogie (externe)"}
  ]

  return (
    <div className="">
      <Link href="/pole-mere-enfant/dashboard" className="menu bg-gray-100 !text-gray-600">
      <Home />
        Accueil</Link>

      <Menuderoulant deroulant={menuderoulant} titre="Services"/>

    </div>

    
  )
}

export default PMereEnfantMenu