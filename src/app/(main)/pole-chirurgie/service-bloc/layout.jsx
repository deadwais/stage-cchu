"use client"

import { useState } from "react";
import Logo from "@/components/Logo";
import UserInfo from "@/components/UserInfo";
import SBlocMenu from "@/components/Menus/SBlocMenu";

const SBlocLayout = ({children}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="">

      {/* DIV PRINCIPALE */}

      <div className={modalOpen? "h-screen flex p-2 blur-md" : "h-screen flex p-2"}>
        {/* Partie gauche */}
        <div className="w-1/5 p-3 pt-8 bg-vert rounded-2xl">
          <Logo/>
          <div className="mt-8 p-2">
            <SBlocMenu/>
          </div>
        </div>
        {/* Partie droite */}
        <div className="w-4/5 ml-7">
          <div className="h-[8%] items-center p-4 flex justify-between">
            {/* TITRE */}
            <div className="hidden sm:flex w-full text-xl">
              <h1>Service Bloc Opératoire</h1>
            </div>
            {/* UTILISATEUR */}
            <UserInfo/>
          </div>
          <div className="h-[92%] bg-gray-100 p-3 rounded-xl overflow-auto">
            {children}
          </div>
        </div>
      </div>

      {/* MODALS */}


    </div>
  )
}

export default SBlocLayout