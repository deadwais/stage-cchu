import MenuItem from "./MenuItem"

const SBlocMenu = () => {
  return (
    <div className="">
      <MenuItem lien="/pole-chirurgie/service-bloc/dashboard" titre="Accueil" />

      <MenuItem lien="/pole-chirurgie/service-bloc/liste-patients" titre="Patients" />

      <MenuItem lien="/pole-chirurgie/service-bloc/liste-interventions" titre="Interventions" />

      <MenuItem lien="/pole-chirurgie/service-bloc/liste-programmes" titre="Programmes" />

      <MenuItem lien="/pole-chirurgie/service-bloc/liste-personnels" titre="Personnels" />

      <MenuItem lien="/pole-chirurgie/service-bloc/statistiques" titre="Statistiques" />
      
      <MenuItem lien="/" titre="Déconnexion" />
    </div>
  )
}

export default SBlocMenu