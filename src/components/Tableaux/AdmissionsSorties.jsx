const AdmissionsSorties = () => {
  return (
    <div className="mt-5">
      <table className="text-sm">
        <thead className="bg-white">
          <tr>
            <th className="p-1 border w-screen" rowSpan={3}>DATE</th>
            <th className="p-1 border w-screen" rowSpan={1} colSpan={6}>ADMISSION</th>
            <th className="p-1 border w-screen" rowSpan={1} colSpan={10}>SORTIE</th>
            <th className="p-1 border w-screen" rowSpan={3}>TOTAL ADMISSION</th>
            <th className="p-1 border w-screen" rowSpan={3}>TOTAL SORTIE</th>
            <th className="p-1 border w-screen" rowSpan={3}>RESTE</th>
          </tr>
          <tr>
            <th className="p-1 border" colSpan={2}>NORMALE</th>
            <th className="p-1 border" colSpan={2}>TRANSFERT</th>
            <th className="p-1 border" colSpan={2}>READMISSION</th>
            <th className="p-1 border" colSpan={2}>NORMALE</th>
            <th className="p-1 border" colSpan={2}>SUR DEMANDE</th>
            <th className="p-1 border" colSpan={2}>EVADE</th>
            <th className="p-1 border" colSpan={2}>DECEDE</th>
            <th className="p-1 border" colSpan={2}>TRANSFERT</th>
          </tr>
          <tr>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
            <th className="p-1 border w-screen">H</th>
            <th className="p-1 border w-screen">F</th>
          </tr>
        </thead>
        <tbody className="text-center">
          
        </tbody>
      </table>
    </div>
  )
}

export default AdmissionsSorties