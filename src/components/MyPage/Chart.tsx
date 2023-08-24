"use client";

import ColumnChart from "@/components/MyPage/ColumnChart";
import TotalDonutChart from "@/components/MyPage/TotalDonutChart";

const p = "text-[20px] pl-[10px]";
export default function Chart() {
  return (
    <div className="shadow-myBoxShadow rounded-[20px]">
      <div className="flex pt-5 pl-5">
        <p className={p}>주간</p>
        <p className={p}>월간</p>
      </div>
      <div className="flex justify-between items-center">
        <ColumnChart />
        <TotalDonutChart />
      </div>
    </div>
  );
}
