"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import ReactApexChart from "react-apexcharts";
// Charger ReactApexChart uniquement côté client
//const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DunatChur = () => {
  const [chartState, setChartState] = useState({
    series: [40, 25, 35],
    options: {
      chart: {
        type: "donut",
      },
      labels: ['Service Orthopédie Traumatologie', 'Service Chirurgie Viscérale' ,'Service Bloc Opératoire'],
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

export default DunatChur;
