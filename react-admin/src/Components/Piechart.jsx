import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Data for the donut chart
  const data = {
    labels: [
      "Completed (18K)",
      "In-progress (18K)",
      "Pending (5K)",
      "Cancelled (2K)",
      "Refunded (0)",
    ],
    datasets: [
      {
        label: "Orders",
        data: [18000, 18000, 5000, 2000, 0],
        backgroundColor: [
          "#28a745", // Completed
          "#007bff", // In-progress
          "#ffc107", // Pending
          "#dc3545", // Cancelled
          "#d63384", // Refunded
        ],
        borderColor: ["#fff"],
        borderWidth: 2,
      },
    ],
  };

  // Options for customizing the donut chart
  const options = {
    cutout: "70%", // Create a donut effect
    plugins: {
      legend: {
        display: false, // Disable built-in legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="card shadow-sm p-3">
      <h5 className="card-title">Statics</h5>
      <div className="chart-container" style={{ height: "200px" }}>
        <Doughnut data={data} options={options} />
      </div>
      <div className="legend mt-3">
        <div className="row">
          <div className="col-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="legend-color bg-gray" />
              <span className="legend-text">All Order (200K)</span>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="legend-color bg-success" />
              <span className="legend-text">Completed (18K)</span>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="legend-color bg-primary" />
              <span className="legend-text">In-progress (18K)</span>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="legend-color bg-warning" />
              <span className="legend-text">Pending (5K)</span>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="legend-color bg-danger" />
              <span className="legend-text">Cancelled (2K)</span>
            </div>
          </div>
          <div className="col-6 mb-2">
            <div className="d-flex align-items-center">
              <span className="legend-color bg-pink" />
              <span className="legend-text">Refunded (0)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
