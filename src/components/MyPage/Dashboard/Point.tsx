"use client";
import useWindowWidth from "@/hooks/use-windowWidth";
import axios from "axios";
import wallet from "img/main/wallet.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import Profile from "../Profile";
import { useSelector } from "react-redux";
import { ToolkitStore } from "@/store";

export default function Point() {
  const [userPoint, setUserPoint] = useState(0);
  const [userName, setUserName] = useState<string | null>(null);
  const windowWidth = useWindowWidth();
  const imgUrl = useSelector((state: ToolkitStore) => state.image.imageUrl);

  useEffect(() => {
    const name = sessionStorage.getItem("name") || localStorage.getItem("name");
    setUserName(name);

    axios
      .post(`/member/UIS`, {
        phonenumber:
          sessionStorage.getItem("phone_number") ||
          localStorage.getItem("phone_number"),
      })
      .then((response) => {
        const dataFromServer = response.data;
        setUserPoint(dataFromServer.myPage.point);
      });
  }, []);

  return (
    <>
      <div className="md:w-[300px] md:h-[300px] w-full h-[140px] flex flex-col md:py-12 mb-10 md:mb-0 md:mr-11 justify-center items-center rounded-[30px] border-2 md:border-4 border-solid border-[#f8b195] bg-white shadow-sm">
        {windowWidth! <= 768 && (
          <>
            <div className="w-full flex justify-start items-center pl-5">
              <Profile src={imgUrl} width={100} height={100} />
              <div className="ml-5">
                <p className="text-[16px]">
                  {userName}
                  <span className="text-[#00000099]">님의 포인트</span>
                </p>

                <p className="text-[24px]">{userPoint}P</p>
              </div>
            </div>
          </>
        )}
        {windowWidth! > 768 && (
          <div className="flex flex-col items-center justify-evenly h-full">
            <div className="flex justify-center items-center ">
              <Image src={wallet} alt="wallet" width={36} />
              <p className="text-gray-800 text-xl font-semibold ml-4 sm:text-[24px]">
                {userName}님의 포인트
              </p>
            </div>
            <p className="text-gray-800 text-[40px] font-medium mobile:text-[44px]">
              {userPoint}P
            </p>
          </div>
        )}
      </div>
    </>
  );
}
