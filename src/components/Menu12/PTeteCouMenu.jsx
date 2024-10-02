"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import MenuDeroulant from "./Menuderoulant";

const PTeteCouMenu = () => {

  const menuderoulant = [
    {lien:"/pole-tete-cou/dashboard" , titre: "Service Neurochirurgie"},
    {lien:"/pole-tete-cou/service-ophtalmologie/dashboard" , titre: "Service Ophtalmologie"}
  ]

  return (
    <div className="">
      <Link href="/pole-tete-cou/dashboard" className="menu bg-gray-100 !text-gray-600">Accueil</Link>

      <MenuDeroulant deroulant={menuderoulant} titre="Services"/>

    </div>
  )
}

export default PTeteCouMenu