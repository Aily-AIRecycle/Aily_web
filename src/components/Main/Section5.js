import classes from "./Section5.module.css";
import map from "../../img/main/map_img.svg";

function Section5() {
  return (
    <div className={classes.box5}>
      <h1 className={classes.h1}>위치 정보</h1>
      <h2 className={classes.h2}>
        근처에 있는 Aily의 위치를 간편하게 확인하세요.
      </h2>
      <img src={map} className={classes.map} />
      {/* <div className={classes.map_box}>
        <div className={classes.map} ref={mapElement}></div>
      </div> */}
    </div>
  );
}
export default Section5;
