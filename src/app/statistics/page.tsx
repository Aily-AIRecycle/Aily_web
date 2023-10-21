"use client";
import React from "react";
import "chartjs-adapter-moment";
import AreaChart from "@/components/StatisStics/AreaChart";
import TotalDonutChart from "@/components/StatisStics/TotalDonutChart";
import LineChart from "@/components/StatisStics/LineChart";

const Statistics = () => {
  return (
    <div className=" overflow-auto whitespace-nowrap py-20">
      <div className="w-full flex justify-center items-center mb-20 ">
        <div className="w-[1450px] flex justify-between ">
          <div className=" flex items-center shadow-xl rounded-3xl">
            <TotalDonutChart width={500} />
          </div>
          <div className="py-5 shadow-xl rounded-3xl">
            <AreaChart width={800} />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="w-[1450px] flex justify-center shadow-xl rounded-3xl py-5">
          <LineChart width={800} />
        </div>
      </div>
    </div>
  );
};
export default Statistics;
