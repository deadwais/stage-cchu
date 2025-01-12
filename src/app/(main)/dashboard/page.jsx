import Annees from "@/components/Annees"
import Cards from "@/components/Cards"
import ApexChart from "@/components/chart/dunat"
import Bar from "@/components/chart/bar"
import Curv from "@/components/chart/curv"
const HopitalDashboardPage = () => {
  
  
  return (
    <div className="">
      {/* ANNEE */}
   
      
      {/* CARD BOXES */}
      <div className="flex gap-4 justify-between flex-wrap">
        <Cards type="Patients" nombre="1023456657" image="/Patient.png" />
        <Cards type="Personnels" nombre="150" image="/Personnels.png" />
        <Cards type="Pôles" nombre="7"  image="/pole.png" />
        <Cards type="Services" nombre="24" image="/service.png"  />
      </div>
<div className="w"></div>
      {/* CHARTS */}
      <div className="flex gap-4 justify-center items-center mt-1">

        {/* GAUCHE */}
        <div className="bg-white rounded-2xl w-full p-1">
          {/* TITRE */}
          <div className="">
            <h1 className="text-center text-lg font-bold">Nombre de patients par poles</h1>
          </div>
          <div className="flex justify-between items-center">
            {/* CHART */}
            <div className="w-72 h-72 ">
            <ApexChart />
          
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
        <div className="flex flex-col gap-3 w-full ">

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
          <div className="bg-white rounded-2xl w-full p-1 ">
            {/* TITRE */}
            <div className="">
              <h1 className="text-center text-md font-bold">Nombre de patients par mois</h1>
            </div>
            {/* CHART */}
            <div className="w-full h-44 my-1">
              <Curv/>
              {/* <Image src="/test.ico" alt="temp" width={300} height={300} /> */}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HopitalDashboardPage















