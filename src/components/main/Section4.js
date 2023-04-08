import classes from "./Section4.module.css";
import line from "../../img/main/line.svg";
import location from "../../img/main/location.svg";
import info from "../../img/main/circle_info.svg";
import battery from "../../img/main/battery.svg";

function Section4() {
  return (
    <div className={classes.box4}>
      <h1 className={classes.h1}>Aily 현황</h1>
      <h2 className={classes.h2}>
        현재 사용하는 Aily의 정보를 한눈에 확인할 수 있습니다.
      </h2>
      <div className={classes.content}>
        <ul className={classes.info}>
          <li>
            <img src={location} alt="location" />
            <h3>사용하는 Aily의 위치</h3>
          </li>
          <li>
            <img src={info} alt="info" />
            <h3>상세정보</h3>
          </li>
          <li>
            <img src={battery} alt="battery" />
            <h3>쓰레기별 적재량</h3>
          </li>
        </ul>
        <div className={classes.aily}>
          <h1>홍대입구역 Aily</h1>
          <h3>상세정보 ></h3>
          <div className={classes.type}>
            <div className={classes.normal}>
              <h5 className={classes.h5}>일반</h5>
              <h6 className={classes.h6}>43%</h6>
              <img src={line} alt={line} />
            </div>
            <div className={classes.can}>
              <h5 className={classes.h5}>캔</h5>
              <h6 className={classes.h6}>89%</h6>
              <img src={line} alt={line} />
            </div>
            <div className={classes.plastic}>
              <h5 className={classes.h5}>플라스틱</h5>
              <h6 className={classes.h6}>22%</h6>
              <img src={line} alt={line} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
