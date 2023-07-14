import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import axios from "axios";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ColumnChart: React.FC = () => {
  const [series, setSeries] = useState<{ name: string; data: number[] }[]>([
    {
      name: "적립내역",
      data: [],
    },
  ]);

  useEffect(() => {
    axios
      .post("/member/member/historypax", {
        nickname: sessionStorage.getItem("name"),
      })
      .then((response) => {
        const data = response.data;
        const monthlyData: number[] = new Array(12).fill(0);
        data.forEach((item: any) => {
          const month = parseInt(item.day.split(" ")[1].split("월")[0]) - 1;
          monthlyData[month] += item.can + item.gen + item.pet;
        });
        setSeries([
          {
            name: "적립내역",
            data: monthlyData,
          },
        ]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
