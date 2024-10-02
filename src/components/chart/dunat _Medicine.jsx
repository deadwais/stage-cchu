"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ReactApexChart from "react-apexcharts";
// Charger ReactApexChart uniquement côté client
//const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DunatMedicine = () => {
  const [chartState, setChartState] = useState({
    series: [40, 45, 30, 15, 11,13,18],
    options: {
      chart: {
        type: "donut",
      },
      labels: ['Service Médecine Interne', ' Service Cardiologie', 'Service Pneumologie Phtisiologie','Service Maladies Infectieuses','Service Oncologie','Service Psychiatrie','Service Appareillage et Rééducation'],
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
        <ReactApexChart options={chartState.options} series={chartState.series} type="donut"  width="480" />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default DunatMedicine;
