import Image from "next/image"


const Cards = ({type, nombre,image}) => {
  return (
    <div className="rounded-2xl odd:bg-white even:bg-bleu odd:text-bleu even:text-white p-3 flex-1 min-w-[150px]">
      <div className="flex items-center gap-4">
        <Image src={image}  alt="icone" width={48} height={48}/>
        <div className="flex flex-col">
          <h1 className="text-base">{type}</h1>
          <h2 className="text-2xl">{nombre}</h2>
        </div>
      </div>
    </div>
  )
}

export default Cards