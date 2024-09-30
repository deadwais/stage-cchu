const NouvCas = () => {
  return (
    <div className="absolute bg-white rounded-2xl w-[95%] h-[95%] top-[2.5%] left-[2.5%] md:w-3/5 md:h-3/4 md:top-[12.5%] md:left-[20%] ring ring-black ring-opacity-20 p-4 overflow-auto">
      {/* TITRE */}
      <h1 className="p-2 text-xl font-semibold">Détails du patient</h1>

      {/* CORPS */}
      <div className="flex">
        <div className="flex flex-col gap-4 w-2/3">
          <span>Nom : </span>
          <span>Prenoms : </span>
          <span>Date de naissance : </span>
          <span>Sexe : </span>
          <span>Adresse : </span>
          <span>Profession : </span>
          <span>Tel : </span>
          <span>Email : </span>
        </div>
        <div className="flex flex-col gap-4 w-1/3">
          <span>Cas : </span>
          <span>Provenance : </span>
          <span>Détails :</span>
          <span>N° Quittance :</span>
        </div>
      </div>
      
      {/* BOUTONS */}
      <div className="flex gap-20 justify-center">
        <button className="py-2 px-6 bg-vert rounded-full text-sm font-medium">Examiner</button>
        <button className="py-2 px-6 bg-bleu rounded-full text-sm font-medium">Consulter</button>
        <button className="py-2 px-6 bg-rouge rounded-full text-sm font-medium">Hospitaliser</button>
        <button className="py-2 px-6 bg-rouge rounded-full text-sm font-medium">Opérer</button>
        <button className="py-2 px-6 bg-gris rounded-full text-sm font-medium">Annuler</button>
      </div>
      
    </div>
  )
}

export default NouvCas