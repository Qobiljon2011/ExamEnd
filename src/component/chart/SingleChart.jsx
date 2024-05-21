import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const LineChart = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Crypto Price",
        data: [
          { x: new Date("2023-01-01").getTime(), y: 2940000 },
          { x: new Date("2023-02-01").getTime(), y: 2940900 },
          { x: new Date("2023-03-01").getTime(), y: 2942900 },
          { x: new Date("2023-04-01").getTime(), y: 2944100 },
          { x: new Date("2023-05-01").getTime(), y: 2944000 },
          { x: new Date("2023-06-01").getTime(), y: 2943300 },
          { x: new Date("2023-07-01").getTime(), y: 2941000 },
          { x: new Date("2023-08-01").getTime(), y: 2943300 },
          { x: new Date("2023-09-01").getTime(), y: 2944300 },
          { x: new Date("2023-10-01").getTime(), y: 2943900 },
          { x: new Date("2023-11-01").getTime(), y: 2945100 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
          { x: new Date("2023-12-01").getTime(), y: 2943300 },
        ],
      },
    ],
    options: {
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        background: "#14161a",
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 5,
        colors: ["#87CEEB"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
          size: 7,
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: ["#87CEEB"],
      },
      title: {
        text: "Crypto Price Movement",
        align: "left",
        style: {
          color: "#FFFFFF",
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          gradientToColors: ["#87CEEB"],
          inverseColors: false,
          opacityFrom: 0.4,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val.toFixed(2);
          },
          style: {
            colors: ["#FFFFFF"],
          },
        },
        title: {
          text: "Price",
          style: {
            color: "#FFFFFF",
          },
        },
      },
      xaxis: {
        type: "datetime",
        labels: {
          style: {
            colors: ["#FFFFFF"],
          },
        },
      },
      tooltip: {
        shared: false,
        theme: "dark",
        x: {
          format: "dd MMM yyyy",
        },
        style: {
          fontSize: "12px",
          background: "#14161a",
          color: "#FFFFFF",
        },
        y: {
          formatter: function (val) {
            return val.toFixed(2);
          },
        },
      },
      theme: {
        mode: "dark",
        palette: "palette1",
        monochrome: {
          enabled: true,
          color: "#87CEEB",
          shadeTo: "light",
          shadeIntensity: 0.65,
        },
      },
    },
  });

return (
    <div>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="area"
        width={1280}
        height={780}
      />
    </div>
  );
};

export default LineChart;