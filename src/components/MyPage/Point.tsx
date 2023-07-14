"use client";
import classes from "@/components/MyPage/styles/Point.module.scss";
import axios from "axios";
import wallet from "img/main/wallet.svg";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Point() {

  interface Data {
    GEN: number;
    CAN: number;
    profile: string;
    phonenumber: string;
    nickname : string;
    point: number;
    PET: number;
  }
  
  const [name2, setName2] = useState<string | null>(null);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const name = sessionStorage.getItem('name');
    setName2(name);
  }, []);

  useEffect(() => {
    axios.post("/member/member/mypage", {
      nickname: sessionStorage.getItem('name')
    })
      .then(response => {
        // Handle the POST request response
        setData(response.data);
      })
      .catch(error => {
        // Handle the POST request error
        console.error(error);
      });
  }, []);
  
  return (
    <>
    {data && (
      <>
      <div className={classes.box}>
        <div>
          <Image src={wallet} alt="wallet" width={36} />
          <p>{name2}님의 포인트</p>
        </div>
        <p className={classes.point}>{data.point}P</p>
      </div>
      </>
    )}
    </>
  );
}
