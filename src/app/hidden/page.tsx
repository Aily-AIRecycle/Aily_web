"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import Header from "@/components/UI/Header";
import Footer from "@/components/UI/Footer";
import { registerables, Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js';
import 'chartjs-adapter-moment';

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, ...registerables);

// Interface and data types
interface DataItem {
  can: string;
  gen: string;
  pet: string;
  [key: string]: string;
}

interface Data {
  [date: string]: {
    [key: string]: DataItem;
  };
}

// Utility function to generate dates for a given month and year
function generateDatesForMonth(month: number, year: number) {
  const numDaysInMonth = new Date(year, month, 0).getDate();
  const dates: string[] = [];
  for (let day = 1; day <= numDaysInMonth; day++) {
    const formattedDay = day < 10 ? `0${day}` : `${day}`;
    const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    dates.push(`2023-${formattedMonth}-${formattedDay}`);
  }
  return dates;
}

// Main component
function Statistics() {
  const [data, setData] = useState<Data | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [units, setUnits] = useState<string[]>([]); // Use state to store the units

  useEffect(() => {
    axios
      .get("/data/data/pd", {})
      .then((response) => {
        console.log("Response from API:", response.data);
        setData(response.data);
        // Extract and set units from the data
        const unitsFromData = response.data[selectedDate]
          ? Object.keys(response.data[selectedDate])
          : [];
        setUnits(unitsFromData);
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [selectedDate]); // Fetch data when selectedDate changes

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  // Function to calculate the chart container width based on the screen size
  const calculateChartWidth = () => {
    const screenWidth = window.innerWidth;
    const numChartsPerRow = Math.floor(screenWidth / 300); // Adjust 300 as needed
    const chartWidth = Math.floor((screenWidth / numChartsPerRow) * 0.8); // You can adjust the 0.8 to control the width
    return chartWidth;
  };

  // Function to calculate the chart container height based on the screen size
  const calculateChartHeight = () => {
    // You can set a fixed height or calculate it based on the screen size as well
    // For example, you can return a fixed value like 300 or adjust the height based on the screenWidth.
    return 300;
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide legends for individual charts (optional)
      },
    },
  };

  return (
    <>
      <Header />
      <div style={{ width: "80%", margin: "0 auto", display: "flex", flexWrap: "wrap" }}>
        <div>
          <label htmlFor="dateInput">보고 싶은 통계 날짜 선택:</label>
          <input type="date" id="dateInput" value={selectedDate} onChange={handleDateChange} />
        </div>
        {data ? ( // Check if data is available
          <>
            {selectedDate && (
              <div style={{ margin: "20px 0" }}>
                <h2>선택된 날짜: {selectedDate}</h2>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {units.map((unit) => (
                    <div key={unit} style={{ width: "25%", margin: "10px", height: calculateChartHeight(), minWidth: calculateChartWidth() }}>
                      <h3>Unit {unit}</h3>
                      {data[selectedDate] && data[selectedDate][unit] ? (
                        <Doughnut
                          data={{
                            labels: ["CAN", "GEN", "PET"],
                            datasets: [
                              {
                                data: [
                                  parseFloat(data[selectedDate][unit].can),
                                  parseFloat(data[selectedDate][unit].gen),
                                  parseFloat(data[selectedDate][unit].pet),
                                ],
                                backgroundColor: [
                                  "rgba(255, 0, 0, 0.6)",
                                  "rgba(0, 0, 255, 0.6)",
                                  "rgba(0, 0, 0, 0.6)",
                                ],
                              },
                            ],
                          }}
                          options={chartOptions}
                        />
                      ) : (
                        <p>수집된 데이터가 없습니다.</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Statistics;

