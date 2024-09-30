const Sortie = () => {
  return (
    <div className="absolute bg-white rounded-2xl w-[95%] h-[95%] top-[2.5%] left-[2.5%] md:w-3/5 md:h-3/4 md:top-[12.5%] md:left-[20%] ring ring-black ring-opacity-20 p-4 overflow-auto">
      {/* TITRE */}
      <h1 className="p-2 text-xl font-semibold">Sortie</h1>
      <h2  className="py-2 text-lg font-medium">Patient : RAKOTO Randria (Homme, 42 ans)</h2>
      
      {/* CORPS */}
      <form className="flex flex-col">
        <div className="xl:w-3/5 flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <label className="font-medium">Date de sortie</label>
            <input type="date" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
          </div>

          <div className="flex justify-between items-center">
            <label className="font-medium">Type de sortie</label>
            <select className="outline-none border rounded-lg py-1 px-2 w-64">
              <option value="">Sortie normale</option>
              <option value="">Sortie sur demande</option>
              <option value="">Evadé</option>
              <option value="">Décedé</option>
              <option value="">Transfert</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label className="font-medium">Diagnostic de sortie</label>
            <select className="outline-none border rounded-lg py-1 px-2 w-64">
              <option value="">Fracture</option>
              <option value="">Exemple</option>
              <option value="">Autre exemple</option>
              <option value="">Autre...</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <label className="font-medium">Observation à la sortie</label>
            <textarea className="outline-none border rounded-lg py-1 px-2 w-64" cols="30" rows="5"></textarea>
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

export default Sortie