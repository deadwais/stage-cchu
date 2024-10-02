import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"
import Consultations from "@/components/Tableaux/Consultations"

const SMedecineInterneConsultationsPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des consultations externes</h1>

      </div>

      {/* TABLEAU */}
      <Consultations/>

    </div>
  )
}

export default SMedecineInterneConsultationsPage