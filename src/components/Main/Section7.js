import classes from "./Section7.module.css";
import leaf from "../../img/main/leaf.svg";
import co2 from "../../img/main/co2.svg";

function Section7() {
  return (
    <div className={classes.box7}>
      <h1 className={classes.h1}>누적 탄소 저감량</h1>
      <h2 className={classes.h2}>Aily의 전체 사용자가 아낀 탄소량입니다.</h2>
      <div className={classes.div}>
        <h3 className={classes.h3}>1786명의 이용자와</h3>
        <h3 className={classes.h3}>Aily는 함께합니다.</h3>
        <li>
          <img src={co2} alt="co2" className={classes.co2} />
          <h6 className={classes.h6}>* 분리수거를 함으로써 절감되는 탄소량</h6>
        </li>
        <li>
          <img src={leaf} alt="leaf" className={classes.leaf} />
          <h6 className={classes.h6}>
            * 탄소저감량을 나무 심는 효과로 환산한 경우
          </h6>
        </li>
      </div>
    </div>
  );
}

export default Section7;
