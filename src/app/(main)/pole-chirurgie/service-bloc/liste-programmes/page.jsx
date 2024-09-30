import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"

const SBlocProgrammesPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Calendrier des intervention programmées</h1>

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

      {/* CALENDRIER */}
      

    </div>
  )
}

export default SBlocProgrammesPage