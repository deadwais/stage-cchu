const Terminer = () => {
  return (
    <div className="absolute bg-white rounded-2xl w-[75%] h-[95%] top-[2.5%] left-[12.5%] md:w-1/4 md:h-3/4 md:top-[12.5%] md:left-[37.5%] ring ring-black ring-opacity-20 p-4 overflow-auto">
      {/* BOUTONS */}
      <div className="flex flex-col justify-between items-center gap-3">
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Prendre les paramètres</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Préscrire un traitement</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Prévoir un prochain contrôle</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Demander un examen radiographique</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Demander un examen échographique</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Demander un bilan labo</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Demander une transfusion sanguine</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Prévoir une intervention</button>
        <button className="py-2 px-6 bg-gris rounded-xl w-full text-sm font-medium">Terminer</button>
      </div>
    </div>
  )
}

export default Terminer