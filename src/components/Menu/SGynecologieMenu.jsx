import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Diversity3, ControlPoint, SafetyCheck, Group, BarChart, Logout } from "@mui/icons-material";
import { useState } from "react";

const SGynecologieMenu = () => {

  const pathname = usePathname()

  const navbar = [
    {lien:"/pole-mere-enfant/service-gynecologie/dashboard", titre:"Accueil", icon:"Home"},
    {lien:"/pole-mere-enfant/service-gynecologie/liste-patients", titre:"Patients", icon:"LinkedCamera"},
    {lien:"/pole-mere-enfant/service-gynecologie/liste-consultations", titre:"Consultations", icon:"LinkOff"},
    {lien:"/pole-mere-enfant/service-gynecologie/liste-rendez-vous", titre:"Rendez-vous", icon:"LinkOff"},
    {lien:"/pole-mere-enfant/service-gynecologie/liste-personnels", titre:"Personnels", icon:"LinkOff"},
    {lien:"/pole-mere-enfant/service-gynecologie/statistiques", titre:"Statistiques", icon:"LinkOff"}
  ]



  return (
    <div className="">
     
      {

          navbar.map((link, i) => {
            const isActive = pathname.startsWith(link.lien)
            return <Link key={i} href={link.lien} className={isActive ? "menu bg-gray-200 !text-vert font-semibold hover:bg-gray-200": "menu"}>
              {
                  link.titre === "Accueil" && <Home />
              }
              {link.titre === "Patients" && <Diversity3 />}
              {link.titre === "Consultations" && <ControlPoint />}
              {link.titre === "Rendez-vous" && <SafetyCheck />}
              {link.titre === "Personnels" && <Group />}
              {link.titre === "Statistiques" && <BarChart />}
              {link.titre}
            </Link>
          })

      }
      
      <Link href="/" className="menu absolute bottom-4 w-[16%]">
        <Logout />
        Déconnexion
        </Link>
    </div>
  )
}

export default SGynecologieMenu