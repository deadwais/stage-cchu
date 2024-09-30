import Etats from "../Etats"

const Examination = () => {
  return (
    <div className="absolute bg-white rounded-2xl w-[95%] h-[95%] top-[2.5%] left-[2.5%] md:w-3/5 md:h-3/4 md:top-[12.5%] md:left-[20%] ring ring-black ring-opacity-20 p-4 overflow-auto">
      {/* TITRE */}
      <h1 className="p-2 text-xl font-semibold">Examination</h1>
      <h2  className="py-2 text-lg font-medium">Patient : RAKOTO Randria (Homme, 42 ans)</h2>

      {/* CORPS */}
      <form className="flex flex-col">
        <div className="flex flex-col lg:flex-row gap-2">

          <div className="w-full">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label className="font-medium">Date d'examen</label>
                <input type="date" readOnly value="" className="outline-none border rounded-lg py-1 px-2 w-64"/>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Type d'examen</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="Radiographie">Radiographie</option>
                  <option value="Echographie">Echographie</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Organe</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="Bras gauche">Bras gauche</option>
                  <option value="Bras droit">Bras droit</option>
                  <option value="Jambe gauche">Jambe gauche</option>
                  <option value="Jambe droite">Jambe droite</option>
                </select>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Provenance</label>
                <input type="text" readOnly value="Hospitalisé" className="outline-none border rounded-lg py-1 px-2 w-64"/>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Service</label>
                <input type="text" readOnly value="Traumatologie" className="outline-none border rounded-lg py-1 px-2 w-64"/>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Chambre</label>
                <input type="text" readOnly value="Ch.201" className="outline-none border rounded-lg py-1 px-2 w-64"/>
              </div>

              <div className="flex justify-between items-center">
                <label className="font-medium">Lit</label>
                <input type="text" readOnly value="Lit 1" className="outline-none border rounded-lg py-1 px-2 w-64"/>
              </div>

              <Etats/>

              <div className="flex justify-between items-center">
                <label className="font-medium">Diagnostic</label>
                <select className="outline-none border rounded-lg py-1 px-2 w-64">
                  <option value="">Fracture</option>
                  <option value="">Exemple</option>
                  <option value="">Autre exemple</option>
                  <option value="">Autre...</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full">
            <h3 className="font-medium text-end lg:-mt-5 pe-2 mb-1">Image</h3>
            <div className="border rounded-2xl w-full h-80 p-1 text-center align-middle">
              <button className="text-gray-500 w-28 text-xs">Cliquez ici pour ajouter une image</button>
            </div>
          </div>
        </div>

        {/* BOUTONS */}
        <div className="px-7 mt-4 flex justify-between items-center">
          <button className="py-2 px-6 bg-vert rounded-full text-sm font-medium">Enregistrer et continuer</button>
          <button className="py-2 px-6 bg-rouge rounded-full text-sm font-medium">Enregistrer et terminer</button>
          <button className="py-2 px-6 bg-gris rounded-full text-sm font-medium">Annuler</button>
        </div>
      </form>

    </div>
  )
}

export default Examination