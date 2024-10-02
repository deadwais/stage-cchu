"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart to disable SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Bar = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: 'Homme',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'femme',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
     
    ],
    options: {
      chart: {
        type: 'bar', // Bar chart type
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['10', '20', '30', '40', '50', '60', '70', '80', '90'],
      },
      yaxis: {
        title: {
          text: '',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        {/* Use 'bar' instead of 'donut' for a bar chart */}
        <ReactApexChart options={chartState.options} series={chartState.series} type="bar" height={160} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Bar;


/*

"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import ReactApexChart to disable SSR
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Bar = () => {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: 'Net Profit',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: 'Revenue',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: 'Free Cash Flow',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: 'bar', // Bar chart type
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  });

  return (
    <div>
      <div id="chart">
        {/* Use 'bar' instead of 'donut' for a bar chart */
      /*  <ReactApexChart options={chartState.options} series={chartState.series} type="bar" height={160} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default Bar;



*/