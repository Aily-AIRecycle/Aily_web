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

const TotalDonutChart: React.FC<TotalDonutChartProps> = (
  props: TotalDonutChartProps
) => {
  const [series, setSeries] = useState<number[]>([]);
  const [sum, setSum] = useState(0);

  useEffect(() => {
    console.log(series);
    const sum: number = series.reduce(
      (accumulator: number, currentValue: number) => {
        return accumulator + currentValue;
      },
      0
    );
    setSum(sum);
  });

  useEffect(() => {
    axios
      .post("/member/member/usertotalDonut", {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
      })
      .then((response) => {
        const data = response.data[0];
        const newSeries: number[] = [];
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            newSeries.push(data[key]);
          }
        }
        console.log(newSeries);
        setSeries(newSeries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
    labels: ["캔", "일반", "플라스틱"],
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
    <div id="chart" className="w-full">
      {sum > 0 ? (
        <ReactApexChart
          options={options}
          series={series}
          type="donut"
          width={props.width}
          height={350}
        />
      ) : (
        <div
          className={`w-[calc(100%-${props.width}px)] h-[350px] flex justify-center items-center text-md`}
        >
          아직 버린 쓰레기가 없어요😮
        </div>
      )}
    </div>
  );
};

export default TotalDonutChart;
