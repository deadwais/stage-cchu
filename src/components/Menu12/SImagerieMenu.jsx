import { Diversity3, Home, Scanner, Radar, Group, BarChart, Logout } from "@mui/icons-material";
import Link from "next/link"
import { usePathname } from "next/navigation";

const SImagerieMenu = () => {

  const pathname = usePathname()

  const navbar = [
    {lien:"/pole-paraclinique/service-imagerie/dashboard", titre:"Accueil"},
    {lien:"/pole-paraclinique/service-imagerie/liste-patients", titre:"Patients"},
    {lien:"/pole-paraclinique/service-imagerie/liste-radiographies", titre:"Radiographies"},
    {lien:"/pole-paraclinique/service-imagerie/liste-echographies", titre:"Echographies"},
    {lien:"/pole-paraclinique/service-imagerie/liste-personnels", titre:"Personnels"},
    {lien:"/pole-paraclinique/service-imagerie/statistiques", titre:"Statistiques"}
  ]

  return (
    <div className="">
      
      {

        navbar.map((link, i) => {
          const isActive = pathname.startsWith(link.lien)
          return <Link key={i} href={link.lien} className={isActive ? "menu bg-gray-200 !text-gray-600 font-semibold hover:bg-gray-200": "menu"}>
            {link.titre === "Accueil" && <Home />} 
            {link.titre === "Patients" && <Diversity3 /> }
            {link.titre === "Radiographies" && <Scanner /> }
            {link.titre === "Echographies" && <Radar /> }
            {link.titre === "Personnels" && <Group /> }
            {link.titre === "Statistiques" && <BarChart /> }
            {link.titre}
          </Link>
        })

      }

      <Link href="/" className="menu absolute bottom-4 hover:bg-green-200 hover:text-gray-600 w-[16%]">
        <Logout />
        Déconnexion</Link>
    </div>
  )
}

export default SImagerieMenu