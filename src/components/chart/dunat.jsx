"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ReactApexChart from "react-apexcharts";
// Charger ReactApexChart uniquement côté client
//const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ApexChart = () => {
  const [chartState, setChartState] = useState({
    series: [40, 50, 40, 15, 14,13],
    options: {
      chart: {
        type: "donut",
      },
      labels: ['Pôle Chirurgie', ' Pôle Tête et Cou', 'Pôle Médecine','Pôle Mère et Enfant','Pôle Paraclinique','Pôle Santé Publique'],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartState.options} series={chartState.series} type="donut"  width="400" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
