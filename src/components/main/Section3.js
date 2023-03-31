import classes from "./Section3.module.css";
import { ReactComponent as Wallet } from "../../img/main/wallet.svg";
import { ReactComponent as Cash } from "../../img/main/cash.svg";
import { ReactComponent as Coin } from "../../img/main/coin.svg";
import { ReactComponent as Bill } from "../../img/main/money_bill.svg";

function Section3() {
  return (
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
        {/* 이 부분 못하겠습니다 */}
        {/* <Cash className={classes.cash} />
        <Coin />
        <Bill /> */}
      </div>
    </div>
  );
}

export default Section3;
