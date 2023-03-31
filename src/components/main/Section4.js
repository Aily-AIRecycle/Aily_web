import classes from "./Section4.module.css";
import { ReactComponent as Normal } from "../../img/main/normal.svg";

function Section4() {
  return (
    <div className={classes.box4}>
      <h1 className={classes.h1}>Aily 현황</h1>
      <h2 className={classes.h2}>
        현재 사용하는 Aily의 정보를 한눈에 확인할 수 있습니다.
      </h2>
      <Normal />
    </div>
  );
}

export default Section4;
