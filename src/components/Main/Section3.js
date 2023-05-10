import classes from "./Section3.module.css";
import wallet from "../../img/main/wallet.svg";
import cash from "../../img/main/cash.svg";
import coin from "../../img/main/coin.svg";
import bill from "../../img/main/money_bill.svg";

function Section3() {
  return (
    <div className={classes.box3}>
      <h1 className={classes.h1}>포인트 제도</h1>
      <h2 className={classes.h2}>
        분리수거할 때 적립되는 포인트는 현금처럼 사용이 가능합니다.
      </h2>
      <div className={classes.point}>
        <div className={classes.wallet_div}>
          <img src={wallet} alt="wallet" className={classes.wallet} />
          <h2>홍길동님의 포인트</h2>
        </div>
        <h1>22,000P</h1>
        <img src={cash} alt="cash" className={classes.cash} />
        <img src={coin} alt="coin" className={classes.coin} />
        <img src={bill} alt="bill" className={classes.bill} />
      </div>
    </div>
  );
}

export default Section3;
