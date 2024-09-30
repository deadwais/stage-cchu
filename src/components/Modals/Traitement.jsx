import Medicaments from "../Tableaux/Medicaments"

const Traitement = () => {
  return (
    <div className="absolute bg-white rounded-2xl w-[95%] h-[95%] top-[2.5%] left-[2.5%] md:w-3/5 md:h-3/4 md:top-[12.5%] md:left-[20%] ring ring-black ring-opacity-20 p-4 overflow-auto">
      {/* TITRE */}
      <h1 className="p-2 text-xl font-semibold">Prescription</h1>
      <h2  className="py-2 text-lg font-medium">Patient : RAKOTO Randria (Homme, 42 ans)</h2>
      
      {/* CORPS */}
      <form className="flex flex-col gap-2">
        <div className="xl:w-3/5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="font-medium">Médecin consultant</label>
            <input type="text" readOnly value="Dr. RASOA" className="outline-none border rounded-lg py-1 px-2 w-64"/>
          </div>

          <div className="flex justify-between items-center">
            <label className="font-medium">Date de préscription</label>
            <input type="date" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
          </div>
        </div>

        {/* TABLEAU */}
        <Medicaments/>

        {/* Boutons */}
        <div className="px-7 mt-12 flex flex-col lg:flex-row gap-2 justify-between items-center">
          <button className="py-2 px-6 bg-vert rounded-full text-sm font-medium">Ajouter un médicament</button>
          <button className="py-2 px-6 bg-bleu rounded-full text-sm font-medium">Imprimer</button>
          <button className="py-2 px-6 bg-rouge rounded-full text-sm font-medium">Enregistrer et terminer</button>
          <button className="py-2 px-6 bg-gris rounded-full text-sm font-medium">Annuler</button>
        </div>
      </form>
    </div>
  )
}

export default Traitement