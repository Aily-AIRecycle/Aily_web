"use client";
import classes from "@/components/MyPage/styles/Point.module.scss";
import axios from "axios";
import wallet from "img/main/wallet.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Point() {


  const [userName, setUserName] = useState<string | null>(null);
  const [userPoint, setUserPoint] = useState<string | null>(sessionStorage.getItem("totalpoint"));


  useEffect(() => {
    const name = sessionStorage.getItem("name") || localStorage.getItem("name");
    const point = sessionStorage.getItem("totalpoint")
    setUserName(name);
    setUserPoint(point);

  }, []);



  return (
    <div className={classes.box}>
      <div>
        <Image src={wallet} alt="wallet" width={36} />
        <p>{userName}님의 포인트</p>
      </div>
      <p className={classes.point}>{userPoint}P</p>
    </div>
  );
}
