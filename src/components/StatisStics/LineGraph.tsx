"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  registerables,
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  ChartConfiguration,
} from "chart.js";
import "chartjs-adapter-moment";
import moment from "moment";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  ...registerables
);

interface Data {
  [date: string]: {
    [info: string]: {
      can: string;
      gen: string;
      pet: string;
    };
  };
}

function Statistics() {
  const [data, setData] = useState<Data>({});

  useEffect(() => {
    axios
      .get("/data/data/kgd", {})
      .then((response) => {
        console.log("Response from API:", response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, []);

  // Process the data and calculate sums for each date
  const processedData = {
    labels: Object.keys(data).map((date) => moment(date).format("YYYY-MM-DD")),
    datasets: [
      {
        label: "All_Sum",
        data: Object.values(data).map((values) => {
          if (!values || typeof values !== "object" || Array.isArray(values)) {
            // Handle null or invalid data here, return 0 or any appropriate default value
            return 0;
          }

          const sum = Object.values(values).reduce((acc, curr) => {
            if (!curr || typeof curr !== "object" || Array.isArray(curr)) {
              // Handle null or invalid data here, return 0 or any appropriate default value
              return acc;
            }

            const { can, gen, pet } = curr;
            return acc + parseFloat(can) + parseFloat(gen) + parseFloat(pet);
          }, 0);

          return sum.toFixed(2); // Rounded to 2 decimal places
        }),
        borderColor: "rgba(75, 192, 192, 1)",
        fill: false,
      },
      {
        label: "Info 1",
        data: Object.values(data).map((values) => {
          if (!values || !values["1"]) {
            return 0;
          }
          const { can, gen, pet } = values["1"];
          const sum = parseFloat(can) + parseFloat(gen) + parseFloat(pet);
          return sum.toFixed(2);
        }),
        borderColor: "rgba(192, 75, 192, 1)",
        fill: false,
      },
      {
        label: "Info 2",
        data: Object.values(data).map((values) => {
          if (!values || !values["2"]) {
            return 0;
          }
          const { can, gen, pet } = values["2"];
          const sum = parseFloat(can) + parseFloat(gen) + parseFloat(pet);
          return sum.toFixed(2);
        }),
        borderColor: "rgba(192, 192, 75, 1)",
        fill: false,
      },
      {
        label: "Info 3",
        data: Object.values(data).map((values) => {
          if (!values || !values["3"]) {
            return 0;
          }
          const { can, gen, pet } = values["3"];
          const sum = parseFloat(can) + parseFloat(gen) + parseFloat(pet);
          return sum.toFixed(2);
        }),
        borderColor: "rgba(75, 75, 192, 1)",
        fill: false,
      },
      {
        label: "Info 4",
        data: Object.values(data).map((values) => {
          if (!values || !values["4"]) {
            return 0;
          }
          const { can, gen, pet } = values["4"];
          const sum = parseFloat(can) + parseFloat(gen) + parseFloat(pet);
          return sum.toFixed(2);
        }),
        borderColor: "rgba(192, 75, 75, 1)",
        fill: false,
      },
    ],
  };

  const options: ChartConfiguration<"line">["options"] = {
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          tooltipFormat: "YYYY-MM-DD",
          displayFormats: {
            day: "YYYY-MM-DD",
          },
        },
        ticks: {
          display: true,
        },
        title: {
          display: true,
          text: "날짜",
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
        },
      },
    },
  };

  const containerStyle = {
    width: "50%", // Reduce the width of the chart to 50%
    margin: "0 auto", // Center the chart horizontally
  };

  return (
    <div style={containerStyle}>
      <Line data={processedData} options={options} />
    </div>
  );
}

export default Statistics;
