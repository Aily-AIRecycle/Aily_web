import classes from "./Section6.module.css";
import earth from "../../img/main/earth.svg";
import hand from "../../img/main/hand.svg";

function Section6() {
  return (
    <div className={classes.box6}>
      <div className={classes.text}>
        <h1 className={classes.h1}>일상 속 지구를 위한 친환경 실천</h1>
        <h1 className={classes.h1}>Aily와 함께 시작하세요.</h1>
      </div>
      <div className={classes.img}>
        <img src={earth} alt="earth" className={classes.earth} />
        <img src={hand} alt="hand" className={classes.hand} />
      </div>
    </div>
  );
}

export default Section6;
