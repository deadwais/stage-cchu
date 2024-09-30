const Etats = () => {
  return (
    <div className="flex justify-between items-center">
      <label className="font-medium">Etat</label>
      <select className="outline-none border rounded-lg py-1 px-2 w-64">
        <option value={0}>A faire</option>
        <option value={1}>En cours</option>
        <option value={2}>Terminé</option>
        <option value={3}>Annulé</option>
      </select>
    </div>
  )
}

export default Etats