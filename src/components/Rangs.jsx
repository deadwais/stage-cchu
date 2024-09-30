const Rangs = () => {
  return (
    <div className="w-full h-48 my-1 flex gap-2">
      {/* GAUCHE */}
      <div className="flex flex-col bg-rouge w-[30%] rounded-xl p-2 justify-between items-center">
        <span className="text-white text-[64px]">1</span>
        <span className="text-white font-medium text-center leading-tight">Diagnostic de rang 1</span>
        <span className="text-white text-sm">59%</span>
      </div>
      {/* DROITE */}
      <div className="flex flex-col w-[70%] justify-between">
        <div className="border p-1 h-[30%] rounded-md flex gap-4 items-center">
          <span className="text-rouge text-[48px]">2</span>
          <div className="flex flex-col">
            <span className="text-rouge font-medium">Diagnostic de rang 2</span>
            <span className="text-xs">14%</span>
          </div>
          
        </div>
        <div className="border p-1 h-[30%] rounded-md flex gap-4 items-center">
        <span className="text-rouge text-[48px]">3</span>
          <div className="flex flex-col">
            <span className="text-rouge font-medium">Diagnostic de rang 3</span>
            <span className="text-xs">11%</span>
          </div>
        </div>
        <div className="border p-1 h-[30%] rounded-md flex gap-4 items-center">
        <span className="text-rouge text-[48px]">4</span>
          <div className="flex flex-col">
            <span className="text-rouge font-medium">Diagnostic de rang 4</span>
            <span className="text-xs">9%</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rangs