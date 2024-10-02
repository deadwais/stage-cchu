import AjouterBtn from "@/components/Boutons/AjouterBtn"
import ExporterBtn from "@/components/Boutons/ExporterBtn"
import FiltrerBtn from "@/components/Boutons/FiltrerBtn"
import Recherche from "@/components/Recherche"
import Patients from "@/components/Tableaux/Patients"

const SMedecineInternePatientsPage = () => {
  return (
    <div className="">
      {/* HAUT */}
      <div className="mb-4">
        {/* Titre */}
        <h1 className="text-lg font-semibold mb-2">Liste des patients</h1>

       
      </div>

      {/* TABLEAU */}
      <Patients/>

    </div>
  )
}

export default SMedecineInternePatientsPage