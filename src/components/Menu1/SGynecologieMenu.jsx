import MenuItem from "./MenuItem"

const SGynecologieMenu = () => {
  return (
    <div className="">
      <MenuItem lien="/pole-mere-enfant/service-gynecologie/dashboard" titre="Accueil" />

      <MenuItem lien="/pole-mere-enfant/service-gynecologie/liste-patients" titre="Patients" />

      <MenuItem lien="/pole-mere-enfant/service-gynecologie/liste-consultations" titre="Consultations" />

      <MenuItem lien="/pole-mere-enfant/service-gynecologie/liste-rendez-vous" titre="Rendez-vous" />

      <MenuItem lien="/pole-mere-enfant/service-gynecologie/liste-personnels" titre="Personnels" />

      <MenuItem lien="/pole-mere-enfant/service-gynecologie/statistiques" titre="Statistiques" />
      
      <MenuItem lien="/" titre="Déconnexion" />
    </div>
  )
}

export default SGynecologieMenu