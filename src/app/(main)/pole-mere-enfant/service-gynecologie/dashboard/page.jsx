import Annees from "@/components/Annees"
import Cards from "@/components/Cards"
import Rangs from "@/components/Rangs"

const SGynecologieDashboardPage = () => {
  return (
    <div className="">
      {/* ANNEE */}
      <Annees/>
      
      {/* CARD BOXES */}
      <div className="flex gap-4 justify-between flex-wrap">
        <Cards type="Patients" nombre="1023456"/>
        <Cards type="Personnels" nombre="150"/>
        <Cards type="Consultations" nombre="250100"/>
      </div>

      {/* CHARTS */}
      <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-4">

        {/* GAUCHE */}
        <div className="bg-white rounded-2xl w-full p-2">
            {/* TITRE */}
            <div className="">
              <h1 className="text-center text-md font-bold">Nombre de patients par mois</h1>
            </div>
            {/* CHART */}
            <div className="w-full h-72 my-1">
              {/* <Image src="/test.ico" alt="temp" width={300} height={300} /> */}
            </div>
          </div>

        {/* DROITE */}
        <div className="flex flex-col gap-3 w-full">

          {/* HAUT */}
          <div className="bg-white rounded-2xl w-full p-2">
            {/* TITRE */}
            <div className="">
              <h1 className="text-center text-md font-bold">Nombre de patients par catégories d'âge</h1>
            </div>
            {/* CHART */}
            <div className="w-full h-40 my-1">
              {/* <Image src="/test.ico" alt="temp" width={300} height={300} /> */}
            </div>
            {/* LEGENDES */}
            <div className="flex justify-center gap-5">
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-black border"></div>
                <span className="text-xs">Legende 1</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-red-600 border"></div>
                <span className="text-xs">Legende 2</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-green-600 border"></div>
                <span className="text-xs">Legende 3</span>
              </div>
            </div>
          </div>

          {/* BAS */}
          <div className="bg-white rounded-2xl w-full p-2">
            {/* TITRE */}
            <div className="">
              <h1 className="text-center text-md font-bold">Diagnostics fréquents</h1>
            </div>
            {/* LISTE */}
            <Rangs/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SGynecologieDashboardPage