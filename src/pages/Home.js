import classes from "./Home.module.css";
import { ReactComponent as Phone } from "../img/main/phone.svg";
import { ReactComponent as QrCode } from "../img/main/qrcode.svg";
import { ReactComponent as Arrow } from "../img/main/right_left_arrow.svg";
import { ReactComponent as RecycleBin } from "../img/main/recycle_bin.svg";
import { ReactComponent as Wallet } from "../img/main/wallet.svg";

function HomePage() {
  return (
    <>
      <div className={classes.box1}>
        <h1 className={classes.h1}>자연을 생각하는 분리수거 로봇</h1>
        <h2 className={classes.h2}>
          Aily를 통해 자동으로 분리수거를 해보세요.
        </h2>
        <div className={classes.space} />
        <Phone />
        <div className={classes.background} />
      </div>
      <div className={classes.box2}>
        <h1 className={classes.h1}>QR 코드</h1>
        <h2 className={classes.h2}>
          간편한 QR코드 인증으로 Aily 이용이 가능합니다.
        </h2>
        <div className={classes.space} />
        <div className={classes.qrcode}>
          <QrCode />
          <div className={classes.qrSpace} />
          <Arrow />
          <div className={classes.qrSpace} />
          <RecycleBin />
        </div>
      </div>
      <div className={classes.box3}>
        <h1 className={classes.h1}>포인트 제도</h1>
        <h2 className={classes.h2}>
          분리수거할 때 적립되는 포인트는 현금처럼 사용이 가능합니다.
        </h2>
        <div className={classes.point}>
          <div className={classes.wallet}>
            <Wallet />
            <h2>홍길동님의 포인트</h2>
          </div>
          <h1>22,000P</h1>
        </div>
      </div>
    </>
  );
}
export default HomePage;
