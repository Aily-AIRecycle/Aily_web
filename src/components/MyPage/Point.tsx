"use client";
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
    nickname: string;
    point: number;
    PET: number;
  }

  const [userName, setUserName] = useState<string | null>(null);
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    const name = sessionStorage.getItem("name") || localStorage.getItem("name");
    setUserName(name);
  }, []);

  useEffect(() => {
    axios
      .post("/member/member/mypage", {
        nickname:
          sessionStorage.getItem("name") || localStorage.getItem("name"),
      })
      .then((response) => {
        // Handle the POST request response
        setData(response.data);
      })
      .catch((error) => {
        // Handle the POST request error
        console.error(error);
      });
  }, []);

  return (
    <div className="w-[250px] h-[250px] flex flex-col pt-12 pb-12 mr-11 items-center rounded-[30px] border-4 border-solid border-[#f8b195] bg-white ">
      <div className="flex justify-center items-center mb-8">
        <Image src={wallet} alt="wallet" width={36} />
        <p className="text-gray-800 text-xl font-semibold ml-4">
          {userName}님의 포인트
        </p>
      </div>
      <p className="text-gray-800 text-[40px] font-medium">
        {data && data.point}P
      </p>
    </div>
  );
}
