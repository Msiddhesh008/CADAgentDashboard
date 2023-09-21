import React from "react";
import "./Doughnuts.css";
import { Doughnut } from "react-chartjs-2";
import { GoDotFill } from "react-icons/go";
import { Chart as ChartJs, ArcElement, Tooltip } from "chart.js";
import { Paper } from "@mui/material";

ChartJs.register(
  ArcElement,
  // Legend,
  Tooltip
);

const DoughnutChart = () => {
  const data = {
    labels: ["Completed", "Pending", "On Going"],
    datasets: [
      {
        label: "Task divided by their status",
        data: [30, 20, 50],
        backgroundColor: ["#4C39B6", "#439DDD", "#F9BD00"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: true, // Hide tooltips as well (optional)
      },
      legend: {
        display: false, // You can choose to hide or show the legend here
        labels: {
          font: {
            size: 12, // Decrease the font size as needed
          },
        },
      },
      datalabels: {
        display: true, // Hide data labels
      },
    },
  };

  return (
    <Paper
      elevation={2}
      className="doughnuts w-100 d-flex justify-content-center align-items-center p-2 pe-5  pe-md-0 ps-5 ps-md-0 gap-4"
    >
      <div className="doughnut-chart-cnt d-flex justify-content-between flex-column">
        <h6>Task divided by their status</h6>
        <div className="h-75 w-100 d-flex justify-content-center">
          <Doughnut data={data} options={options} />
        </div>
      </div>

      <div className="doughnut-chart-data-lable-cnt d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="align-items-center d-flex">
            <GoDotFill color="#4C39B6" size={28} />
            <span className="doughnut-lable me-5">Completed</span>
          </div>
          <span className="lable-percent">30%</span>
        </div>

        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="align-items-center d-flex">
            <GoDotFill color="#439DDD" size={28} />
            <span className="doughnut-lable me-5">Pending</span>
          </div>
          <span className="lable-percent">20%</span>
        </div>

        <div className="d-flex w-100 justify-content-between align-items-center">
          <div className="align-items-center d-flex">
            <GoDotFill color="#F9BD00" size={28} />
            <span className="doughnut-lable me-5">Ongoing</span>
          </div>
          <span className="lable-percent">50%</span>
        </div>
      </div>
    </Paper>
  );
};

export default DoughnutChart;
