"use client";
import Chart from "@/components/MyPage/Chart";
import Point from "@/components/MyPage/Point";
import PointHistory from "@/components/MyPage/PointHistory";
import Title from "@/components/MyPage/Title";

export default function Dashboard() {
  return (
    <>
      <div className="h-full web:my-10 web:p-10 sm:px-10 mobile:pb-10 bg-white rounded-3xl">
        <Title text="대시보드" />
        <div className="flex flex-col justiy-center md:justify-start md:flex-row mb-11 w-full">
          <Point />
          <PointHistory />
        </div>
        <Chart />
      </div>
    </>
  );
}
