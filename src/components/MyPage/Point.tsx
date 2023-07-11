"use client";
import classes from "@/components/MyPage/styles/Point.module.scss";
import wallet from "img/main/wallet.svg";
import Image from "next/image";

export default function Point() {
  return (
    <>
      <div className={classes.box}>
        <div>
          <Image src={wallet} alt="wallet" width={36} />
          <p>홍길동님의 포인트</p>
        </div>
        <p className={classes.point}>22,000P</p>
      </div>
    </>
  );
}
