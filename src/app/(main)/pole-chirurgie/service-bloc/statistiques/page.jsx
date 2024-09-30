import ExporterBtn from "@/components/Boutons/ExporterBtn"
import Periode from "@/components/Periode"
import Recherche from "@/components/Recherche"
import StatsAge from "@/components/Tableaux/StatsAge"
import TypeStats from "@/components/TypeStats"

const SBlocStatistiquesPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* TITRE */}
        <h1 className="text-lg font-semibold mb-2">Statistiques</h1>

        <div className="flex flex-col items-end md:flex-row md:items-center justify-between gap-2">
          {/* Barre de recherche */}
          <Recherche/>

          <div className="flex gap-3 lg:gap-7 me-4">
            {/* Choix */}
            <Periode/>
            <TypeStats/>
            

            {/* Boutons */}
            <ExporterBtn/>
          </div>
          
        </div>
      </div>

      {/* CORPS */}
      <StatsAge/>

    </div>
  )
}

export default SBlocStatistiquesPage