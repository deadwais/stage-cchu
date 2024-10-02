"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart to disable SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Curv = () => {
  const [chartState, setChartState] = useState({
    series: [
        {
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
          }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
          },
     
    ],
    options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'MMM'
          },
        },
    },
  });

  return (
    <div>
      <div id="chart">
        {/* Use 'bar' instead of 'donut' for a bar chart'dd/MM/yy HH:mm */}
        <ReactApexChart options={chartState.options} series={chartState.series} type="area"  height={210} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Curv;
