
import Interventions from "@/components/Tableaux/Interventions"

const SBlocInterventionsPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des interventions chirurgicales</h1>

        
        
      </div>

      {/* TABLEAU */}
      <Interventions/>

    </div>
  )
}

export default SBlocInterventionsPage