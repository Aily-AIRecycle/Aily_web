"use client";

import ColumnChart from "@/components/MyPage/ColumnChart";
import TotalDonutChart from "@/components/MyPage/TotalDonutChart";
import useWindowWidth from "@/hooks/use-windowWidth";
import { useEffect, useState } from "react";

const p = "text-[20px] pl-[10px]";
export default function Chart() {
  const windowWidth = useWindowWidth();
  const [colX, setColX] = useState(0);
  const [donutX, setDonutX] = useState(0);

  useEffect(() => {
    if (windowWidth! >= 1024) {
      setColX(590);
      setDonutX(400);
    } else if (640 <= windowWidth! && windowWidth! <= 1024) {
      setColX(windowWidth! - 80);
      setDonutX(windowWidth! - 80);
    } else {
      setColX((windowWidth! * 9) / 10);
      setDonutX((windowWidth! * 9) / 10);
    }
  }, [windowWidth]);

  return (
    <div className="shadow-myBoxShadow rounded-[20px] bg-white w-full">
      <div className="flex pt-5 pl-5">
        <p className={p}>주간</p>
        <p className={p}>월간</p>
      </div>
      <div className="lg:flex lg:justify-between lg:items-center lg:p-4 py-5 w-full">
        <ColumnChart width={colX} />
        <TotalDonutChart width={donutX} />
      </div>
    </div>
  );
}
