import MenuItem from "./MenuItem"

const SMedecineInterneMenu = () => {
  return (
    <div className="">
      <MenuItem lien="/pole-medecine/service-medecine-interne/dashboard" titre="Accueil" />

      <MenuItem lien="/pole-medecine/service-medecine-interne/liste-patients" titre="Patients" />

      <MenuItem lien="/pole-medecine/service-medecine-interne/liste-hospitalisations" titre="Hospitalisations" />

      <MenuItem lien="/pole-medecine/service-medecine-interne/liste-consultations" titre="Consultations" />

      <MenuItem lien="/pole-medecine/service-medecine-interne/liste-rendez-vous" titre="Rendez-vous" />

      <MenuItem lien="/pole-medecine/service-medecine-interne/liste-personnels" titre="Personnels" />

      <MenuItem lien="/pole-medecine/service-medecine-interne/statistiques" titre="Statistiques" />

      <MenuItem lien="/" titre="Déconnexion" />

    </div>
  )
}

export default SMedecineInterneMenu