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
};

export default AreaChart;

// import React from "react";
// import {
//   ResponsiveContainer,
//   LineChart,
//   Line,
//   CartesianGrid,
//   XAxis,
//   YAxis,
//   Tooltip,
//   Legend
// } from "recharts";

// import React, { PureComponent } from "react";
// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// const data = [
//   {
//     name: "Jan",
//     $: 400,
//   },
//   {
//     name: "Feb",
//     $: 1000,
//   },
//   {
//     name: "Mar",
//     $: 1000,
//   },
//   {
//     name: "Apr",
//     $: 2500,
//   },
//   {
//     name: "May",
//     $: 3000,
//   },
//   {
//     name: "Jun",
//     $: 1500,
//   },
//   {
//     name: "Jul",
//     $: 4000,
//   },
//   {
//     name: "Aug",
//     $: 5000,
//   },
//   {
//     name: "Sep",
//     $: 8000,
//   },
//   {
//     name: "Oct",
//     $: 6000,
//   },
//   {
//     name: "Nov",
//     $: 5500,
//   },
//   {
//     name: "Dec",
//     $: 6500,
//   },
// ];

// export default class Example extends PureComponent {
//   static demoUrl = "https://codesandbox.io/s/simple-area-chart-4ujxw";

//   render() {
//     return (
//       <AreaChart width={250} height={70} data={data}>
//         <XAxis dataKey="name" hide="false" />
//         <Tooltip />
//         <Area type="monotone" dataKey="$" stroke="#4aced7" fill="#abe9ec"/>
//       </AreaChart>
//     );
//   }
// }

// const data = [
//   {
//     name: "Jan",
//     $: 400,
//   },
//   {
//     name: "Feb",
//     $: 1000,
//   },
//   {
//     name: "Mar",
//     $: 1000,
//   },
//   {
//     name: "Apr",
//     $: 2500,
//   },
//   {
//     name: "May",
//     $: 3000,
//   },
//   {
//     name: "Jun",
//     $: 1500,
//   },
//   {
//     name: "Jul",
//     $: 4000,
//   },
//   {
//     name: "Aug",
//     $: 5000,
//   },
//   {
//     name: "Sep",
//     $: 8000,
//   },
//   {
//     name: "Oct",
//     $: 6000,
//   },
//   {
//     name: "Nov",
//     $: 5500,
//   },
//   {
//     name: "Dec",
//     $: 6500,
//   },
// ];

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];
// const AreaChart = () => {
//   return (
//     <div className="">
//       <LineChart width={200} height={70} data={data}>
//         <Tooltip />
//         <XAxis dataKey="name" hide="false"/>
//         <Line type="monotone" dataKey="$" stroke="aqua" />
//         {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
//       </LineChart>
//     </div>
//   );
// };

// export default AreaChart;
