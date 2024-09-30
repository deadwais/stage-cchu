const Intervention = () => {
    return (
      <div className="absolute bg-white rounded-2xl w-[95%] h-[95%] top-[2.5%] left-[2.5%] md:w-3/5 md:h-3/4 md:top-[12.5%] md:left-[20%] ring ring-black ring-opacity-20 p-4 overflow-auto">
        {/* TITRE */}
        <h1 className="p-2 text-xl font-semibold">Intervention</h1>
        <h2  className="py-2 text-lg font-medium">Patient : RAKOTO Randria (Homme, 42 ans)</h2>
        
        {/* CORPS */}
        <form className="flex flex-col">
          <div className="flex flex-col lg:flex-row gap-2">
            <div className="w-full flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="font-medium">Date d'intervention</label>
                <input type="date" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Indication</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="">Urgence</option>
                  <option value="">Programmé</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Type d'intervention</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="">Type 1</option>
                  <option value="">Type exemple</option>
                  <option value="">Autre...</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Type d'anésthesie</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="">Générale</option>
                  <option value="">Loco-régionale</option>
                  <option value="">Régionale...</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Compte rendu opératoire</label>
                <textarea className="outline-none border rounded-lg py-1 px-2 w-64" cols="30" rows="5"></textarea>
              </div>
  
              <div className="flex justify-between items-center">
                <label className="font-medium">Observation</label>
                <textarea className="outline-none border rounded-lg py-1 px-2 w-64" cols="30" rows="5"></textarea>
              </div>
            </div>

  
            <div className="w-full flex flex-col gap-2">

              <div className="flex justify-between items-center">
                <label className="font-medium">Détails</label>
                <textarea className="outline-none border rounded-lg py-1 px-2 w-64" cols="30" rows="5"></textarea>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Equipe opératoire</label>
                <textarea className="outline-none border rounded-lg py-1 px-2 w-64" cols="30" rows="10"></textarea>
              </div>
              
              <div className="flex justify-between items-center">
                <label className="font-medium">Issue</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="">Réussite</option>
                  <option value="">Echec</option>
                  <option value="">Interruption</option>
                </select>
              </div>
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
  
  export default Intervention