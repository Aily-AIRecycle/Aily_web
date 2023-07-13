"use client";

import Chart from "@/components/MyPage/Chart";
import Point from "@/components/MyPage/Point";
import PointHistory from "@/components/MyPage/PointHistory";
import classes from "@/components/MyPage/styles/Dashboard.module.scss";

export default function Dashboard() {
  return (
    <>
      <div className={classes.dashboard}>
        <p className={classes.title}>대시보드</p>
        <div className={classes.box}>
          <Point />
          <PointHistory />
        </div>
        <Chart />
      </div>
    </>
  );
}
