import { BarChart, ControlPoint, Diversity3, Group, Home, Logout, Medication, SafetyCheck } from "@mui/icons-material";
import Link from "next/link"
import { usePathname } from "next/navigation";

const SMedecineInterneMenu = () => {

  const pathname = usePathname()

  const navbar = [
    {lien:"/pole-medecine/service-medecine-interne/dashboard", titre:"Accueil"},
    {lien:"/pole-medecine/service-medecine-interne/liste-patients", titre:"Patients"},
    {lien:"/pole-medecine/service-medecine-interne/liste-hospitalisations", titre:"Hospitalisations"},
    {lien:"/pole-medecine/service-medecine-interne/liste-consultations", titre:"Consultations"},
    {lien:"/pole-medecine/service-medecine-interne/liste-rendez-vous", titre:"Rendez-vous"},
    {lien:"/pole-medecine/service-medecine-interne/liste-personnels", titre:"Personnels"},
    {lien:"/pole-medecine/service-medecine-interne/liste-statistiques", titre:"Statistiques"}
  ]

  return (
    <div className="">

      
    {

      navbar.map((link, i) => {
        const isActive = pathname.startsWith(link.lien)
        return <Link key={i} href={link.lien} className={isActive ? "menu bg-gray-200 !text-gray-600 font-semibold hover:bg-gray-200": "menu"}>
           {
                  link.titre === "Accueil" && <Home />
              }
              {link.titre === "Patients" && <Diversity3 />}
              {link.titre === "Hospitalisations" && <Medication />}
              {link.titre === "Consultations" && <ControlPoint />}
              {link.titre === "Rendez-vous" && <SafetyCheck />}
              {link.titre === "Personnels" && <Group />}
              {link.titre === "Statistiques" && <BarChart />}
          {link.titre}</Link>
      })

    }

      <Link href="/" className="menu absolute bottom-4 hover:bg-green-200 hover:text-gray-600 w-[16%]">
        <Logout />
        Déconnexion</Link>

    </div>
  )
}

export default SMedecineInterneMenu