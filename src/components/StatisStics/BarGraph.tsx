"use client";
// Import required libraries
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";
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
// function generateDatesForMonth(month: number, year: number) {
//   const numDaysInMonth = new Date(year, month, 0).getDate();
//   const dates: string[] = [];
//   for (let day = 1; day <= numDaysInMonth; day++) {
//     const formattedDay = day < 10 ? `0${day}` : `${day}`;
//     const formattedMonth = month < 10 ? `0${month}` : `${month}`;
//     dates.push(`2023-${formattedMonth}-${formattedDay}`);
//   }
//   return dates;
// }

// Main component
function Statistics() {
  const [data, setData] = useState<Data | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [units, setUnits] = useState<string[]>([]);
  const [weekData, setWeekData] = useState<Data | null>(null);

  useEffect(() => {
    axios
      .get("/data/data/kgd", {})
      .then((response) => {
        console.log("Response from API:", response.data);
        setData(response.data);
        const unitsFromData = response.data[selectedDate]
          ? Object.keys(response.data[selectedDate])
          : [];
        setUnits(unitsFromData);

        if (selectedDate) {
          const selectedDateTime = new Date(selectedDate).getTime();
          const oneDayMs = 24 * 60 * 60 * 1000;
          const weekData: Data = {};
          for (let i = 0; i < 7; i++) {
            const currentDate = new Date(selectedDateTime - (i * oneDayMs)).toISOString().split('T')[0];
            weekData[currentDate] = response.data[currentDate] || {};
          }
          setWeekData(weekData);
        }
      })
      .catch((error) => {
        console.error("API request error:", error);
      });
  }, [selectedDate]);

  const chartOptions = {
    plugins: {
      legend: {
        display: false, // Hide legends for individual charts (optional)
      },
    },
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const extractDataPointsForUnit = (unit: string, dataType: string) => {
    const dataPoints: { x: string; y: number }[] = [];
    if (weekData) {
      weekDataDatesReversed.forEach((date) => {
        const item = weekData[date][unit];
        if (item) {
          dataPoints.push({
            x: date, // Use the date as the x value
            y: parseFloat(item[dataType]), // Use the selected data type ("can", "gen", or "pet")
          });
        } else {
          dataPoints.push({
            x: date,
            y: 0, // Add 0 value for dates without data
          });
        }
      });
    }
    return dataPoints;
  };

  const weekDataDates: string[] = Object.keys(weekData || {});
  const weekDataDatesReversed: string[] = weekDataDates.slice().reverse();

  return (
    <>
      <div style={{ width: "80%", margin: "0 auto", display: "flex", flexWrap: "wrap" }}>
        <div>
          <label htmlFor="dateInput">보고 싶은 통계 날짜 선택:</label>
          <input type="date" id="dateInput" value={selectedDate} onChange={handleDateChange} />
        </div>
        {data ? (
          <>
            {weekData && (
              <div style={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "center" }}>
                {units.map((unit) => (
                  <div key={unit} style={{ width: "30%", margin: "10px", textAlign: "center" }}>
                    <h3>기계번호 {unit}</h3>
                    <div style={{ width: "100%" }}>
                      <Bar
                        data={{
                          datasets: [
                            {
                              label: "CAN",
                              data: extractDataPointsForUnit(unit, "can"), // Use "can" data type
                              backgroundColor: "rgba(255, 0, 0, 0.6)",
                            },
                            {
                              label: "GEN",
                              data: extractDataPointsForUnit(unit, "gen"), // Use "gen" data type
                              backgroundColor: "rgba(0, 0, 255, 0.6)",
                            },
                            {
                              label: "PET",
                              data: extractDataPointsForUnit(unit, "pet"), // Use "pet" data type
                              backgroundColor: "rgba(0, 0, 0, 0.6)",
                            },
                          ],
                        }}
                        options={{
                          ...chartOptions,
                          scales: {
                            x: {
                              type: 'time', // Use time type for x-axis
                              time: {
                                unit: 'day', // Display one label per day
                                tooltipFormat: 'YYYY-MM-DD', // Format for tooltip display
                                displayFormats: {
                                  day: 'YYYY-MM-DD', // Format for x-axis labels
                                },
                              },
                              title: {
                                display: true,
                                text: '날짜',
                              },
                            },
                            y: {
                              title: {
                                display: true,
                                text: 'Kg(can,pet,gen)',
                              },
                            },
                          },
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Statistics;