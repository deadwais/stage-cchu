
const Notification = ({cas, nom, type, date}) => {
  var texte = ""
  var urgence = false
  if(type === 1){
    texte = "Urgent"
    urgence = true
  }else if(type === 2){
    texte = "Normal"
  }

  return (
    <div className="p-2 border-b-[1px] hover:bg-gris cursor-pointer">
      <div className="text-gray-500 text-xs">{cas}</div>
      <div className="py-1 text-sm">{nom}</div>
      <div className="flex items-end justify-between">
        <span className={urgence? "text-sm py-1 font-medium text-rouge" : "text-sm py-1 font-medium text-vert"}>{texte}</span>
        <span className="text-xs text-gray-500 italic">{date}</span>
      </div>
    </div>
  )
}

export default Notification