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
      data: [122, 119, 320, 125, 220, 310, 232, 219, 320, 225, 340, 310],
      fill: true,
      backgroundColor: "rgba(110, 1, 160, 0.425)",
      borderColor: "rgb(110, 1, 160) ",
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
    xAxes: [
      {
        display: false,
      },
    ],
  },
};

const DataChart2 = () => (
  <>
    <Line data={data} options={options} />
  </>
);

export default DataChart2;
