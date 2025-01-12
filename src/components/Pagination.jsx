const Pagination = () => {
  return (
    <div className="p-4 flex items-center justify-between">
      <button disabled className="px-4 py-2 rounded-md bg-white text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Prec</button>
      
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm font-bold">1</button>
        <button className="px-2 rounded-sm">2</button>
        <button className="px-2 rounded-sm">3</button>
        ...
        <button className="px-2 rounded-sm">10</button>
      </div>
      
      <button className="px-4 py-2 rounded-md bg-white text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">Suiv</button>
    </div>
  )
}

export default Pagination