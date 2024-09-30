"use client"

import Image from "next/image";
import { useState } from "react";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Notification from "./Notification";

const UserInfo = () => {
  const [notifOpen, setNotifOpen] = useState(false);

  return (
    <div className="w-full">
      {/* UTILISATEUR */}
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-gray-100 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
          <NotificationsIcon onClick={() => {setNotifOpen(!notifOpen)}} className="text-gray-600 hover:text-bleu"/>
          <div className={notifOpen? "hidden" : "absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-vert text-white rounded-full text-xs"}>
            1
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">Andrianina Laiscia</span>
          <span className="text-[10px] text-right text-gray-500">Super Admin</span>
        </div>
        <Image src="/noavatar.png" alt="avatar" width={36} height={36} className="rounded-full"/>
      </div>

      {/* NOTIFICATIONS */}
      <div className={notifOpen? "absolute top-9 right-3 w-52 bg-white ring-1 ring-gris z-50" : "hidden"}>
        {/* En-tete */}
        <div className="p-2 border-b-2 flex justify-between items-center">
          <h1 className="text-sm font-semibold">Notifications</h1>
          <div className="w-5 h-5 flex items-center justify-center bg-vert text-white rounded-full text-xs">1</div>
        </div>

        {/* Corps */}
        <div className="max-h-[352px] overflow-y-scroll overflow-x-hidden">
          <Notification cas="Radiographie" nom="RASOANIRINA Josephine" type={1} date="Maintenant" />
          <Notification cas="Radiographie" nom="OLOMBELONA" type={2} date="Il y a 1 minute" />
          <Notification cas="Radiographie" nom="AAAAAAAAAAAA" type={2} date="Il y a 4 minutes" />
          <Notification cas="Radiographie" nom="IZY" type={2} date="Il y a 1 heure" />
          <Notification cas="Radiographie" nom="ABCDEFGHIJKLMNOPQRSTUVWXYZ kewifujiweu weiuh" type={1} date="Il y a 1 heure" />
          <Notification cas="Radiographie" nom="Gegy" type={1} date="Il y a 3 heures" />
          <Notification cas="Radiographie" nom="Test Test" type={2} date="Il y a 2 jours" />
        </div>
      </div>


    </div>
    
  )
}

export default UserInfo