import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface TotalDonutChartProps {}

const TotalDonutChart: React.FC<TotalDonutChartProps> = () => {
  const series = [107, 145, 107];

  const options: ApexOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
              fontFamily: "Pretendard",
              fontWeight: 500,
              fontSize: "40px",
              formatter: function (val: string) {
                return val;
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: "총 버린 쓰레기 개수",
              color: "#676E7A",
              fontFamily: "Pretendard",
              fontWeight: 500,
              formatter: function (w: any) {
                return w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return a + b;
                });
              },
              fontSize: "16px",
            },
          },
        },
      },
    },
    labels: ["일반", "플라스틱", "캔"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "bottom",
      formatter: function (val: string, opts: any) {
        const add = (arr: number[]) =>
          arr.reduce((a: number, b: number) => a + b, 0);
        const number =
          (opts.w.globals.series[opts.seriesIndex] /
            add(opts.w.globals.series)) *
          100;
        return number.toFixed() + "% " + val;
      },
      fontFamily: "Pretendard",
      customLegendItems: [],
    },
    responsive: [
      {
        breakpoint: undefined,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
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
        type="donut"
        width={400}
        height={350}
      />
    </div>
  );
};

export default TotalDonutChart;
