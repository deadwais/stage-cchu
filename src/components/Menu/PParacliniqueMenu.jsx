"use client"

import React, { useState } from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import MenuDeroulant from "./Menuderoulant";

const PParacliniqueMenu = () => {

  const menuderoulant = [
    {lien:"/pole-paraclinique/service-imagerie/dashboard" , titre: "Service Imagerie Médicale"},
  ]

  return (
    <div className="">
      <Link href="/pole-paraclinique/dashboard" className="menu bg-gray-100 !text-gray-600">Accueil</Link>

      <MenuDeroulant deroulant={menuderoulant} titre="Services"/>

    </div>
  )
}

export default PParacliniqueMenu