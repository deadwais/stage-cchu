import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Diversity3, ControlPoint, SafetyCheck, Group, BarChart, Logout, Emergency, Event } from "@mui/icons-material";

const SBlocMenu = () => {

  const pathname = usePathname()

  const navbar = [
    {lien:"/pole-chirurgie/service-bloc/dashboard", titre:"Accueil"},
    {lien:"/pole-chirurgie/service-bloc/liste-patients", titre:"Patients"},
    {lien:"/pole-chirurgie/service-bloc/liste-interventions", titre:"Archives"},
    {lien:"/pole-chirurgie/service-bloc/liste-programmes", titre:"Programmes"},
    {lien:"/pole-chirurgie/service-bloc/liste-personnels", titre:"Personnels"},
   
    {lien:"/pole-mere-enfant/service-gynecologie/statistiques", titre:"Statistiques"}
  ]

  return (
    <div className="">
      
      {

          navbar.map((link, i) => {
            const isActive = pathname.startsWith(link.lien)
            return <Link key={i} href={link.lien} className={isActive ? "menu bg-gray-200 !text-vert font-semibold hover:bg-gray-200": "menu"}>
              {link.titre === "Accueil" && <Home /> }
              {link.titre === "Patients" && <Diversity3 /> }
              {link.titre === "Archives" && <Emergency /> }
              {link.titre === "Programmes" && <Event /> }
              {link.titre === "Personnels" && <Group /> }
              
              {link.titre === "Statistiques" && <BarChart /> }
              {link.titre}
            </Link>
          })

      }

      
      <Link href="/" className="menu absolute bottom-4 hover:bg-green-200 hover:text-gray-600 w-[16%]">
        <Logout />
        Déconnexion
      </Link>
    </div>
  )
}

export default SBlocMenu