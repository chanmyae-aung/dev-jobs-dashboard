import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";

ChartJs.register(BarElement, CategoryScale, LinearScale, PointElement, Tooltip);

const StackedBar = () => {
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
        barThickness: 11,
        backgroundColor: "#00C5D9",
        hoverBackgroundColor: "#0faab9",
        label: "$",
        data: [
          12440, 15021, 10081, 10984, 8409, 12532, 13986, 19227, 12636, 10171,
          6753, 15589,
        ],
      },
      {
        barThickness: 11,
        backgroundColor: "#f6f7f8",
        hoverBackgroundColor: "#eaecee",
        borderRadius: 5,
        label: "$",
        data: [
          12357, 13665, 9071, 9914, 5115, 12291, 10010, 19092, 11976, 9174,
          5189, 14513,
        ],
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
        mode: "index",
        callbacks: {
          label: (context) => {
            return new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(context.parsed.y);
          },
        },
      },
    },
    scales: {
      y: {
        grid: {
          display: false,
        },
        ticks: {
          callback: (value, index, values) => {
            return value > 0
              ? "$" +
                  (value < 1000000
                    ? Math.floor(value / 1000) + "k"
                    : Math.floor(value / 1000000) + "M")
              : value;
          },
        },
        border: {
          display: false,
        },
        stacked: true,
        beginAtZero: true,
      },
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        stacked: true,
      },
    },
  };

  return (
    <div className="w-[60%]">
      <div className="bg-white flex flex-col gap-10 p-5 rounded-xl shadow-lg">
        <div className="flex justify-between items-center">
          <div className="">
            <h5 className="uppercase text-xs font-bold">Sales</h5>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="bg-[#00C5D9] h-[10px] w-[10px] rounded-full"></div>
              <h5 className="uppercase text-[10px] text-gray-400">Projections</h5>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-gray-200 h-[10px] w-[10px] rounded-full"></div>
              <h5 className="uppercase text-[10px] text-gray-400">Actual</h5>
            </div>
          </div>
        </div>
        <div className="">
          <Bar data={data} options={options} height={300}></Bar>
        </div>
      </div>
    </div>
  );
};

export default StackedBar;
