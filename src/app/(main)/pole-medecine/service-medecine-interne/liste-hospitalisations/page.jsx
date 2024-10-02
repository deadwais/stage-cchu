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

       
      </div>

      {/* TABLEAU */}
      <Hospitalisations/>

    </div>
  )
}

export default SMedecineInterneHospitalisationsPage