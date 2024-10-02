import Annees from "@/components/Annees"
import Cards from "@/components/Cards"
import Bar from "@/components/chart/bar"
import Curv from "@/components/chart/curv"
import DunatMedicine from "@/components/chart/dunat _Medicine"
const PMedecineDashboardPage = () => {
  return (
    <div className="">
      {/* ANNEE */}
      <Annees/>

      {/* CARD BOXES */}
      <div className="flex gap-4 justify-between flex-wrap">
        <Cards type="Patients" nombre="1023456657"/>
        <Cards type="Personnels" nombre="150"/>
        <Cards type="Services" nombre="1"/>
      </div>

      {/* CHARTS */}
      <div className="flex gap-4 justify-center items-center mt-4">

        {/* GAUCHE */}
        <div className="bg-white rounded-2xl w-full p-2">
          {/* TITRE */}
          <div className="">
            <h1 className="text-center text-lg font-bold">Nombre de patients par services</h1>
          </div>
          <div className="flex justify-between items-center">
            {/* CHART */}
            <div className="w-72 h-72 ">
              {/* <Image src="/test.ico" alt="temp" width={300} height={300} /> */}
              <DunatMedicine/>
            </div>
            {/* LEGENDES 
            <div className="">
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-black border"></div>
                <span className="text-sm">Legende 1</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-red-600 border"></div>
                <span className="text-sm">Legende 2</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-green-600 border"></div>
                <span className="text-sm">Legende 3</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-blue-600 border"></div>
                <span className="text-sm">Legende 4</span>
              </div>
              <div className="flex gap-1 items-center">
                <div className="w-3 h-3 bg-yellow-500 border"></div>
                <span className="text-sm">Legende 5</span>
              </div>
            </div>*/}
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
              <Bar/>
              {/* <Image src="/test.ico" alt="temp" width={300} height={300} /> */}
            </div>
            {/* LEGENDES 
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
            </div>*/}
          </div>

          {/* BAS */}
          <div className="bg-white rounded-2xl w-full p-2">
            {/* TITRE */}
            <div className="">
              <h1 className="text-center text-md font-bold">Nombre de patients par mois</h1>
            </div>
            {/* CHART */}
            <div className="w-full h-48 my-1">
              {/* <Image src="/test.ico" alt="temp" width={300} height={300} /> */}
              <Curv/>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PMedecineDashboardPage