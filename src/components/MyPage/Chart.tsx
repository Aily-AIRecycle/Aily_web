"use client";

import ColumnChart from "./ColumnChart";
import TotalDonutChart from "./TotalDonutChart";
import classes from "@/components/MyPage/styles/Chart.module.scss";

export default function Chart() {
  return (
    <div className={classes.box}>
      <div className={classes.date}>
        <p>주간</p>
        <p>월간</p>
      </div>
      <div className={classes.chart}>
        <ColumnChart />
        <TotalDonutChart />
      </div>
    </div>
  );
}
