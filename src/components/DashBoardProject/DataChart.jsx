import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ],
  datasets: [
    {
      label: "history",
      data: [122, 119, 320, 125, 220, 310, 232, 219, 320, 225, 340, 310],
      fill: true,
      backgroundColor: "rgba(107, 157, 248, 0.5)",
      borderColor: "rgb(4, 80, 221) ",
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
  },
};

const DataChart = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default DataChart;
