"use client";

import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";

const BarChart = () => {
  const acquisitions = useRef(null); // Initialize useRef with null

  const [data, setData] = useState([
    {
      year: "Amazone",
      dataset1: 100,
      dataset2: 500,
      dataset3: 590,
      dataset4: 800,
      dataset5: 900,
    },
    {
      year: "Wallmart",
      dataset1: 1500,
      dataset2: 1500,
      dataset3: 123,
      dataset4: 256,
      dataset5: 259,
    },
  ]);

  useEffect(() => {
    const bar = new Chart(acquisitions.current, {
      type: "bar",
      data: {
        labels: data.map((row) => row.year),
        datasets: [
          {
            label: "Dataset 1",
            data: data.map((row) => row.dataset1),
            backgroundColor: "rgba(54, 162, 235)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
            stack: "Stack 0", // Stack group for dataset 1
            borderRadius: 20,
          },
          {
            label: "Dataset 2",
            data: data.map((row) => row.dataset2),
            backgroundColor: "rgba(255, 99, 132)",
            borderColor: "rgba(255, 99, 132, 1)",
            borderWidth: 1,
            borderRadius: 20,
            stack: "Stack 0", // Stack group for dataset 2, should be the same as dataset 1 to stack them
          },
          {
            label: "Dataset 3",
            data: data.map((row) => row.dataset3),
            backgroundColor: "rgba(75, 192, 192)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
            borderRadius: 20,
            stack: "Stack 0", // Stack group for dataset 3
          },
          {
            label: "Dataset 4",
            data: data.map((row) => row.dataset4),
            backgroundColor: "rgba(153, 102, 255)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
            borderRadius: 20,
            stack: "Stack 0", // Stack group for dataset 4
          },
          {
            label: "Dataset 5",
            data: data.map((row) => row.dataset5),
            backgroundColor: "rgba(255, 159, 64",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
            borderRadius: 20,
            stack: "Stack 0", // Stack group for dataset 5
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            stacked: true,
            grid: {
              display: false,
            },
          },
          y: {
            stacked: true,
            grid: {
              display: true,
            },
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      bar.destroy();
    };
  }, [data]);

  return <canvas ref={acquisitions} className="!w-full"></canvas>;
};

export default BarChart;
