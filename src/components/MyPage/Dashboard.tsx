"use client";
import Chart from "@/components/MyPage/Chart";
import Point from "@/components/MyPage/Point";
import PointHistory from "@/components/MyPage/PointHistory";

export default function Dashboard() {
  return (
    <>
      <div className="mt-10 mb-28">
        <p className="text-[28px] mb-6">대시보드</p>
        <div className="flex mb-11">
          <Point />
          <PointHistory />
        </div>
        <Chart />
      </div>
    </>
  );
}
