"use client"

import React, { useState } from "react";
import Link from "next/link";
import MenuDeroulant from "./Menuderoulant";
import { Home } from "@mui/icons-material";

const PChirurgieMenu = () => {

  const menuderoulant = [
    {lien: "/pole-chirurgie/dashboard", titre: "Service Orthopédie Traumatologie"},
    {lien: "/pole-chirurgie/dashboard", titre: "Service Chirurgie Viscérale"},
    {lien: "/pole-chirurgie/service-bloc/dashboard", titre: "Service Bloc Opératoire"},
  ]

  return (
    <div className="">
        <Link href="/pole-chirurgie/dashboard" className="menu bg-gray-100 !text-gray-600">
          <Home />
          Accueil</Link>

        <MenuDeroulant deroulant={menuderoulant} titre="Services"/>
      
    </div>
  )
}

export default PChirurgieMenu