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

interface AreaChartProps {
  width: number;
}

const AreaChart: React.FC<AreaChartProps> = (props: AreaChartProps) => {
  const [dates, setDates] = useState<string[] | undefined>(undefined);
  const [seriesData, setSeriesData] = useState<SeriesDataItem[] | undefined>(
    []
  );

  useEffect(() => {
    axios
      .get<DataItem[]>("/data/kgd", {})
      .then((response) => {
        const data = response.data;

        const canDataMap: { [date: string]: number } = {};
        const petDataMap: { [date: string]: number } = {};
        const genDataMap: { [date: string]: number } = {};

        data.forEach((item) => {
          const date = item.date;
          const canValue = parseFloat(item.can);
          const petValue = parseFloat(item.pet);
          const genValue = parseFloat(item.gen);

          if (canDataMap[date]) {
            canDataMap[date] += canValue;
          } else {
            canDataMap[date] = canValue;
          }

          if (petDataMap[date]) {
            petDataMap[date] += petValue;
          } else {
            petDataMap[date] = petValue;
          }

          if (genDataMap[date]) {
            genDataMap[date] += genValue;
          } else {
            genDataMap[date] = genValue;
          }
        });

        // Extract date and series data from the dictionary
        const dates = Object.keys(canDataMap);
        const canData = dates.map((date) => canDataMap[date]);
        const petData = dates.map((date) => petDataMap[date]);
        const genData = dates.map((date) => genDataMap[date]);

        setDates(dates);

        // Set the series data
        const updatedSeriesData = [
          { name: "캔", data: canData },
          { name: "일반쓰레기", data: genData },
          { name: "플라스틱", data: petData },
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
      type: "area",
      stacked: true,
      toolbar: { show: false },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "datetime",
      categories: dates,
    },
    title: {
      text: "일별 쓰레기 배출량",
      align: "center",
      style: {
        fontSize: "20px",
        fontFamily: "Pretendard",
        fontWeight: 500,
      },
    },
    tooltip: {
      x: {
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
          type="area"
          width={props.width}
          height={350}
        />
      )}
    </>
  );
};

export default AreaChart;
