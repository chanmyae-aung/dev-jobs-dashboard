import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip
);

const AreaChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "$",
        data: [
          400, 1000, 1000, 2500, 3000, 1500, 4000, 5000, 8000, 6000, 5500, 6500,
        ],
        backgroundColor: "#00C5D9",
        pointStyle: "circle",
        pointColor: "#00C5D9",
        pointRadius: 2,
        borderColor: "#00C5D9",
        pointBorderColor: "transparent",
        tension: 0.4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,

    plugins: {
      legend: false,
      tooltip: {
        displayColors: true,
        usePointStyle: true,
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: 0,
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div>
      <Line
        height={72}
        data={data}
        options={options}
        style={{ marginLeft: "auto" }}
      ></Line>
    </div>
  );
  }
export default AreaChart;

