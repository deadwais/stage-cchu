import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"
import Radiographies from "@/components/Tableaux/Radiographies"

const SImagerieRadiographiesPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des examens radiographiques</h1>

       
      </div>

      {/* TABLEAU */}
      <Radiographies/>
      
    </div>
  )
}

export default SImagerieRadiographiesPage