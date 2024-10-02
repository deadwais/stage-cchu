import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"
import Echographies from "@/components/Tableaux/Echographies"

const SImagerieEchographiesPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des examens échographiques</h1>

        
      </div>

      {/* TABLEAU */}
      <Echographies/>

    </div>
  )
}

export default SImagerieEchographiesPage