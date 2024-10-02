"use client"; 
import Link from "next/link";
import { useEffect } from "react";
import HomeIcon from '@mui/icons-material/Home';
import Logo from "../Logo";
export default function SBlocMenu (){
  useEffect(() => {
    const list = document.querySelectorAll(".navbar li");
    const activelink = function (item) {
      list.forEach(function (el) {
        el.classList.remove("hovered");
      });
      item.classList.add("hovered");
    };
    
    list.forEach(function (item) {
      item.addEventListener("mouseover", function () {
        activelink(item);
      });
    });
    
    // Clean up event listeners when the component is unmounted
    return function cleanup() {
      list.forEach(function (item) {
        item.removeEventListener("mouseover", function () {
          activelink(item);
        });
      });
    };
    
    
  }, []);
/* bg-blue-500 */
    return(
<div className="relative w-full">
      <div className="fixed w-[260px] h-full bg-[#01CC87] h-[550px] transition-all duration-500 overflow-hidden rounded-2xl  mt-2  ml-3 ">
        <ul className="absolute top-7 left-0 w-full px-6">
          <li className="my-4 text-xl font-bold text-center text-white pointer-events-none">
            <Logo/>
          </li>
        
          <li className="hover:bg-white hover:border hover:border-white hover:rounded-lg transition-all duration-300">
            <Link href="/container" className="flex items-center text-white hover:text-[#01CC87]">
              <span className="min-w-[60px] h-[60px]"></span>
              <span className="pl-2"><HomeIcon/> Home</span>
            </Link>
          </li>
          <li className="hover:bg-white hover:border hover:border-white hover:rounded-lg transition-all duration-300" >
            <Link href="/client" className="flex items-center text-white hover:text-[#01CC87]">
              <span className="min-w-[60px] h-[60px]"></span>
              <span className="pl-2">Client</span>
            </Link>
          </li>
          <li className="hover:bg-white hover:border hover:border-white hover:rounded-lg transition-all duration-300" >
            <Link href="/vetement" className="flex items-center text-white hover:text-[#01CC87]">
              <span className="min-w-[60px] h-[60px]"></span>
              <span className="pl-2">Vêtements</span>
            </Link>
          </li>
          <li className="hover:bg-white hover:border hover:border-white hover:rounded-lg transition-all duration-300" >
            <Link href="/collection" className="flex items-center text-white hover:text-[#01CC87]">
              <span className="min-w-[60px] h-[60px]"></span>
              <span className="pl-2">Collection</span>
            </Link>
          </li>
          <li className="hover:bg-white hover:border hover:border-white hover:rounded-lg transition-all duration-300" >
            <Link href="/livraison" className="flex items-center text-white hover:text-[#01CC87]">
              <span className="min-w-[60px] h-[60px]"></span>
              <span className="pl-2">Livraison</span>
            </Link>
          </li>
          <li className="hover:bg-white hover:border hover:border-white hover:rounded-lg transition-all duration-300"  >
            <Link href="/gategorie" className="flex items-center text-white hover:text-[#01CC87]">
              <span className="min-w-[60px] h-[60px]"></span>
              <span className="pl-2">Deconnexion</span>
            </Link>
          </li>
          
        </ul>
      </div>
    </div>
    )
}
