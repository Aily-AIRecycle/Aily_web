"use client";

import Point from "./Point";
import PointHistory from "./PointHistory";
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
      </div>
    </>
  );
}
