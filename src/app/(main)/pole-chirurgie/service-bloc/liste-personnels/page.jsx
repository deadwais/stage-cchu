import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"
import Personnels from "@/components/Tableaux/Personnels"

const SBlocPersonnelsPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des personnels</h1>

      </div>

      {/* TABLEAU */}
      <Personnels/>
    </div>
  )
}

export default SBlocPersonnelsPage