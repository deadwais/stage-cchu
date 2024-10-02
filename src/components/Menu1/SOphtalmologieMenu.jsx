import MenuItem from "./MenuItem"

const SOphtalmologieMenu = () => {
  return (
    <div className="">
      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/dashboard" titre="Accueil" />

      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/liste-patients" titre="Patients" />

      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/liste-hospitalisations" titre="Hospitalisations" />

      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/liste-consultations" titre="Consultations" />

      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/liste-rendez-vous" titre="Rendez-vous" />

      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/liste-personnels" titre="Personnels" />

      <MenuItem lien="/pole-tete-cou/service-ophtalmologie/statistiques" titre="Statistiques" />

      <MenuItem lien="/" titre="Déconnexion" />

    </div>
  )
}

export default SOphtalmologieMenu