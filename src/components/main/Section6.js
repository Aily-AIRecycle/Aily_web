import classes from "./Section6.module.css";
import { ReactComponent as Earth } from "../../img/main/earth.svg";
import { ReactComponent as Hand } from "../../img/main/hand.svg";

function Section6() {
  return (
    <div className={classes.box6}>
      <div className={classes.text}>
        <h1 className={classes.h1}>일상 속 지구를 위한 친환경 실천</h1>
        <h1 className={classes.h1}>Aily와 함께 시작하세요.</h1>
      </div>
      <div className={classes.img}>
        <Earth />
        <Hand />
      </div>
    </div>
  );
}

export default Section6;
