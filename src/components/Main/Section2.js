import qrPhone from "../../img/main/qrcode.svg";
import arrow from "../../img/main/right_left_arrow.svg";
import recycleBin from "../../img/main/recycle_bin.svg";
import classes from "./Section2.module.css";

function Section2() {
  return (
    <div className={classes.box2}>
      <h1 className={classes.h1}>QR 코드</h1>
      <h2 className={classes.h2}>
        간편한 QR코드 인증으로 Aily 이용이 가능합니다.
      </h2>
      <div className={classes.qrcode}>
        <img src={qrPhone} alt="qrPhone" className={classes.qrPhone} />
        <div className={classes.qrSpace} />
        <img src={arrow} alt="arrow" className={classes.arrow} />
        <div className={classes.qrSpace} />
        <img src={recycleBin} alt="recycleBin" className={classes.recycleBin} />
      </div>
    </div>
  );
}

export default Section2;
