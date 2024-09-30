const InterventionDetails = () => {
  return (
    <div className="absolute bg-white rounded-2xl w-[95%] h-[95%] top-[2.5%] left-[2.5%] md:w-1/3 md:h-3/4 md:top-[12.5%] md:left-1/3 ring ring-black ring-opacity-20 p-4 overflow-auto">
        {/* TITRE */}
        <h1 className="p-2 text-xl font-semibold">Détails de l'intervention</h1>
        <h2  className="py-2 text-lg font-medium">Patient : RAKOTO Randria (Homme, 42 ans)</h2>
        
        {/* CORPS */}
        <form className="flex flex-col">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center">
              <label className="font-medium">Heure d'entrée en salle</label>
              <input type="time" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
            </div>

            <div className="flex justify-between items-center">
              <label className="font-medium">Heure de début d'intervention</label>
              <input type="time" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
            </div>

            <div className="flex justify-between items-center">
              <label className="font-medium">Heure de début d'anesthésie</label>
              <input type="time" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
            </div>

            <div className="flex justify-between items-center">
              <label className="font-medium">Heure de fin d'intervention</label>
              <input type="time" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
            </div>

            <div className="flex justify-between items-center">
              <label className="font-medium">Heure de sortie de salle</label>
              <input type="time" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
            </div>
          </div>
          
          {/* Boutons */}
          <div className="px-7 mt-12 flex flex-col lg:flex-row gap-2 justify-between items-center">
            <button className="py-2 px-6 bg-vert rounded-full text-sm font-medium">Enregistrer</button>
            <button className="py-2 px-6 bg-gris rounded-full text-sm font-medium">Annuler</button>
          </div>
        </form>
      </div>
  )
}

export default InterventionDetails