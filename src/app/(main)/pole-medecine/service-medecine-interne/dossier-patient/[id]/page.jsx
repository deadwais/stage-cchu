import CasService from "@/components/Tableaux/CasService"

const SMedecineInternePatientPage = () => {
  return (
    <div className="">
      {/* TITRE */}
      <h1 className="text-lg font-semibold mb-2">Dossier du patient</h1>
      
      {/* CORPS */}
      <div className="flex flex-col lg:flex-row">

        {/* GAUCHE */}
        <div className="w-full lg:w-1/3 flex flex-col gap-2">
          {/* INFOS */}
          <div className="bg-white p-2 rounded-2xl w-full text-sm flex flex-col">
            <h2 className="font-semibold">Infos</h2>
            <span>Nom et Prénoms : </span>
            <span>Date de naissance : </span>
            <span>Sexe : </span>
            <span>Adresse : </span>
            <span>Profession : </span>
            <span>Tel : </span>
            <span>Email : </span>
          </div>

          {/* ANTECEDENTS */}
          <div className="bg-white p-2 rounded-2xl w-full text-sm flex flex-col max-h-[360px] overflow-y-auto">
            <h2 className="font-semibold">Antécédents</h2>
            <h3 className="font-medium">Antécédents personnels</h3>
            <span>Médicaux : Néant</span>
            <span>Chirurgicaux :</span>
            <span>Mode de vie :</span>
            <span>Habitude toxique :</span>
            <span>Allergie :</span>
            <span>Autre :</span>
            
            <h3 className="font-medium">Antécédents familiales</h3>
            <span>(Mère)</span>
            <span>Chirurgicaux :</span>
            <span>(Père)</span>
            <span>Chirurgicaux :</span>
          </div>

        </div>

        {/* DROITE */}
        <div className="w-full lg:w-2/3 px-2">
          <CasService/>
        </div>
      </div>
    </div>
  )
}

export default SMedecineInternePatientPage