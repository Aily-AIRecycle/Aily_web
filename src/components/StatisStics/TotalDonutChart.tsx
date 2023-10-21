import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import axios from "axios";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

interface TotalDonutChartProps {
  width: number; // width 속성을 프로퍼티로 선언
}

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

const TotalDonutChart: React.FC<TotalDonutChartProps> = (
  props: TotalDonutChartProps
) => {
  const [series, setSeries] = useState<number[]>([]);
  const [dates, setDates] = useState<string[] | undefined>(undefined);

  useEffect(() => {
    axios
      .get<DataItem[]>("/data/kgd", {})
      .then((response) => {
        const data = response.data;
        let can = 0;
        let gen = 0;
        let pet = 0;
        console.log(data);

        data.forEach((item) => {
          can += parseFloat(item.can);
          pet += parseFloat(item.pet);
          gen += parseFloat(item.gen);
        });
        setSeries([can, gen, pet]);
        console.log(can, pet, gen);

        setDates(dates);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dates]);

  const options: ApexOptions = {
    chart: {
      width: 380,
      type: "donut",
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: -40,
            },
            value: {
              show: true,
              fontFamily: "Pretendard",
              fontWeight: 500,
              fontSize: "24px",
              formatter: function (val: string) {
                return val;
              },
              offsetY: -20,
            },
            total: {
              show: true,
              showAlways: true,
              label: "총 버린 쓰레기의 양",
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
    labels: ["캔", "일반", "플라스틱"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      position: "right",
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
    grid: {
      padding: {
        bottom: -150,
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
      <ReactApexChart
        options={options}
        series={series}
        type="donut"
        width={props.width}
        height={350}
      />
    </>
  );
};

export default TotalDonutChart;
