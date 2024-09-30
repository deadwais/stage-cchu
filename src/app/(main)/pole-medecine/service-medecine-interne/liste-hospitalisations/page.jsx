import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"
import Hospitalisations from "@/components/Tableaux/Hospitalisations"

const SMedecineInterneHospitalisationsPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des hospitalisations</h1>

        <div className="flex flex-col items-end md:flex-row md:items-center justify-between gap-2">
          {/* Barre de recherche */}
          <Recherche/>

          {/* BOUTONS */}
          <div className="flex gap-7 me-4">
            <FiltrerBtn/>
            <ExporterBtn/>
            <AjouterBtn/>
          </div>
        </div>
      </div>

      {/* TABLEAU */}
      <Hospitalisations/>

    </div>
  )
}

export default SMedecineInterneHospitalisationsPage