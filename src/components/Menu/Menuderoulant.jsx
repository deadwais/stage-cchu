import { Logout } from "@mui/icons-material";
import Link from "next/link"
import React, { useState } from "react";


export default function MenuDeroulant ({deroulant, titre}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className={isOpen ? "px-4 py-2 text-gray-600 font-semibold ring-2 ring-gray-200 cursor-pointer hover:bg-gray-100": "px-4 py-2 text-white cursor-pointer hover:bg-green-200 hover:text-gray-600 rounded"} onClick={() => {setIsOpen(!isOpen)}}>
                <span>Liste des {titre}</span>
            </div>

            <div className={isOpen? "bg-white ring-2 ring-gray-200 max-h-[200px] overflow-y-auto overflow-x-hidden" : "hidden"}>
            
            {
                deroulant.map((link, i) => {
                    return  <Link href={link.lien} key={i} className={isOpen ? "menu !text-gray-600 border-b border-gray-200 hover:bg-gray-200 px-2 !mb-0" : "menu"}>{link.titre}</Link>
                })
            }
            </div>

            <Link href="/" className="menu absolute bottom-4 hover:bg-green-200 hover:text-gray-600 w-[16%]">
                <Logout/>
                Déconnexion</Link>
        </div>
    )
}