import MenuItem from "./MenuItem"

const SImagerieMenu = () => {
  return (
    <div className="">
      <MenuItem lien="/pole-paraclinique/service-imagerie/dashboard" titre="Accueil" />

      <MenuItem lien="/pole-paraclinique/service-imagerie/liste-patients" titre="Patients" />

      <MenuItem lien="/pole-paraclinique/service-imagerie/liste-radiographies" titre="Radiographies" />

      <MenuItem lien="/pole-paraclinique/service-imagerie/liste-echographies" titre="Echographies" />

      <MenuItem lien="/pole-paraclinique/service-imagerie/liste-personnels" titre="Personnels" />

      <MenuItem lien="/pole-paraclinique/service-imagerie/statistiques" titre="Statistiques" />

      <MenuItem lien="/" titre="Déconnexion" />
    </div>
  )
}

export default SImagerieMenu