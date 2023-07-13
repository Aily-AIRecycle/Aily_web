import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart: React.FC = () => {
  const series = [
    {
      name: "적립내역",
      data: [19, 32, 24, 5, 13, 21, 7, 10, 25, 21, 13, 8],
    },
  ];

  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "bar",
      stackType: "100%",
    },
    fill: {
      colors: ["#F8B195"],
      opacity: 0.7,
      type: "solid",
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: "top", // top, center, bottom
        },
      },
    },
    // 바 위에 숫자 표시
    dataLabels: {
      enabled: true,
      formatter: function (val: number) {
        return "" + val;
      },
      offsetY: -20,
      style: {
        fontSize: "12px",
        colors: ["#304758"],
      },
    },
    xaxis: {
      categories: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
      position: "bottom",
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      crosshairs: {
        fill: {
          type: "gradient",
          //   막대에 마우스 갖다대면 생기는 그림자
          gradient: {
            colorFrom: "#D8E3F0",
            colorTo: "#BED1E6",
            stops: [0, 100],
            opacityFrom: 0.4,
            opacityTo: 0.5,
          },
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      axisBorder: {
        show: true,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: true,
        formatter: function (val: number) {
          return "" + val;
        },
      },
    },
  };

  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="bar"
        width={590}
        height={350}
      />
    </div>
  );
};

export default ColumnChart;
