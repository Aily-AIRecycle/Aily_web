import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import axios from "axios";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface DataItem {
  can: string;
  date: string;
  gen: string;
  pet: string;
}

interface SeriesDataItem {
  name: string;
  data: number[];
}

interface LineChartProps {
  width: number;
}

const LineChart: React.FC<LineChartProps> = (props: LineChartProps) => {
  const [dates, setDates] = useState<string[] | undefined>(undefined);
  const [seriesData, setSeriesData] = useState<SeriesDataItem[] | undefined>(
    []
  );

  useEffect(() => {
    axios
      .get<DataItem[]>("/data/kgd", {})
      .then((response) => {
        const data = response.data;
        const dataMap: { [date: string]: number } = {};

        let total = 0;
        data.forEach((item) => {
          const date = item.date;
          const canValue = parseFloat(item.can);
          const petValue = parseFloat(item.pet);
          const genValue = parseFloat(item.gen);

          total += canValue + petValue + genValue;
          if (dataMap[date]) {
            dataMap[date] += total;
          } else {
            dataMap[date] = total;
          }
        });

        // Extract date and series data from the dictionary
        const dates = Object.keys(dataMap);
        const totalData = dates.map((date) => dataMap[date]);

        setDates(dates);

        // Set the series data
        const updatedSeriesData = [
          { name: "누적 탄소저감량", data: totalData },
        ];

        setSeriesData(updatedSeriesData);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",
      stacked: false,
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    // fill: {
    //   type: "gradient",
    // },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    title: {
      text: "탄소저감량",
      // text: "지금까지 Aily를 사용해 버린 쓰레기의 양",
      align: "center",
      // margin: 10,
      style: {
        fontSize: "20px",
        fontFamily: "Pretendard",
        fontWeight: 500,
      },
    },
    tooltip: {
      x: {
        // format: "dd/MM/yy",
        format: "yyyy년 MM월 dd일",
      },
    },
    theme: { palette: "palette9" },
  };

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <>
      {dates && seriesData && (
        <ReactApexChart
          options={options}
          series={seriesData}
          type="line"
          width={props.width}
          height={350}
        />
      )}
    </>
  );
};

export default LineChart;
