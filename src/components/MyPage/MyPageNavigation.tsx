"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@/components/MyPage/Profile";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setImageUrl } from "@/store/image";
import useWindowWidth from "@/hooks/use-windowWidth";
import Image from "next/image";
import more from "img/mypage/more.svg";
import less from "img/mypage/less.svg";

const menuData = [
  { name: "대시보드", path: "dashboard" },
  { name: "내 정보 수정", path: "edit" },
  { name: "비밀번호 변경", path: "password" },
  { name: "회원 탈퇴", path: "leave" },
];

export default function MyPageNavigation() {
  const [userName, setUserName] = useState<string | null>(null);
  const pathname = usePathname();
  const [imgUrl, setImgUrl] = useState<string>("");
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const name = sessionStorage.getItem("name") || localStorage.getItem("name");
    setUserName(name);
  }, []);

  useEffect(() => {
    axios
      .post(
        "/member/member/userimage",
        {
          phonenumber:
            sessionStorage.getItem("phone_number") ||
            localStorage.getItem("phone_number"),
        },
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      )
      .then((response) => {
        console.log(response);

        // const imageUrl = response.data.split("https://ailymit.store")[1]
        // console.log(imageUrl);

        // setImgUrl(response.data);
        const url = `${response.data}?${Date.now()}`;
        setImgUrl(url);
        dispatch(setImageUrl(url));
      })
      .catch((error) => {
        // Handle errors if needed
      });
  }, []);

  return (
    <>
      {windowWidth! >= 1400 && (
        <div className="w-[280px] h-[855px] my-10 mr-11 rounded-3xl py-8  bg-white">
          <div className="flex flex-col items-center mb-12 ">
            <Profile src={imgUrl} width={180} height={180} />
            <p className="text-[28px] mt-3">{userName}님</p>
          </div>
          <ul className="flex flex-col justify-center items-center">
            {menuData.map((menu, index: number) => (
              <li
                key={index}
                className={`${"flex items-center justify-center w-full h-10 text-[16px] "} ${
                  pathname === `/my-page/${menu.path}`
                    ? "border-[#f8b195] border-l-[12px] border-solid pr-3"
                    : ""
                }`}
              >
                <Link href={`/my-page/${menu.path}`}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {windowWidth! < 1400 && (
        <>
          <div className="sm:px-10">
            <div
              className="flex justify-between items-center pt-4"
              onClick={() => {
                setIsExpanded(!isExpanded);
              }}
            >
              {menuData.map(
                (menu, index: number) =>
                  pathname === `/my-page/${menu.path}` && (
                    <span className="text-[28px]" key={index}>
                      {menu.name}
                    </span>
                  )
              )}
              {isExpanded ? (
                <Image src={less} width={24} alt="less" />
              ) : (
                <Image src={more} width={24} alt="more" />
              )}
            </div>
            {isExpanded && (
              <ul>
                {menuData.map((menu, index: number) => (
                  <li
                    key={index}
                    className="flex items-center text-[20px] w-full h-10"
                  >
                    <Link href={`/my-page/${menu.path}`} className="w-full">
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </>
  );
}
