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

const BarChart = () => {
  const data = {
    labels: [
      "1 May,2022",
      "5 May,2022",
      "10 May,2022",
      "15 May,2022",
      "20 May,2022",
      "25 May,2022",
      "30 May,2022",
    ],
    datasets: [
      {
        barThickness: 7,
        backgroundColor: "#f6f7f8",
        hoverBackgroundColor:"#00C5D9",
        borderRadius:5,
        label:"%",
        data: [17, 20, 24, 34, 12, 10, 8],
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
      <Bar data={data} options={options} height={72}></Bar>
    </div>
  );
};

export default BarChart;

// import React, { PureComponent } from "react";
// import {
//   BarChart,
//   Bar,
//   Cell,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "1 May ,2022",
//     percent: 17,
//   },
//   {
//     name: "5 May ,2022",
//     percent: 20,
//   },
//   {
//     name: "10 May ,2022",
//     percent: 24,
//   },
//   {
//     name: "15 May ,2022",
//     percent: 34,
//   },
//   {
//     name: "20 May ,2022",
//     percent: 12,
//   },
//   {
//     name: "25 May ,2022",
//     percent: 10,
//   },
//   {
//     name: "30 May ,2022",
//     percent: 8,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/simple-bar-chart-tpz8r";

//   render() {
//     return (
//       <BarChart width={250} height={70} data={data}>
//         <XAxis dataKey="name" hide="false" />
//         <Tooltip />
//         <Bar dataKey="percent" barSize={10} radius={7} fill="#abe9ec"/>
//       </BarChart>
//     );
//   }
// }
