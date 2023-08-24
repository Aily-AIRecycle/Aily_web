"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Profile from "@/components/MyPage/Profile";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setImageUrl } from "@/store/image";

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

  useEffect(() => {
    const name = sessionStorage.getItem("name") || localStorage.getItem("name");
    setUserName(name);
  }, []);

  useEffect(() => {
    axios
      .post(
        "https://ailymit.store/member/member/userimage",
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
    <div className="mt-[88px] mr-11">
      <div className="flex flex-col items-center mb-12">
        <Profile src={imgUrl} />
        <p className="text-[28px] mt-3">{userName}</p>
      </div>
      <ul className="flex flex-col justify-center items-center">
        {menuData.map((menu, index: number) => (
          <li
            key={index}
            className={`${"flex items-center justify-center w-[280px] h-10 text-[16px] border-l-[12px] border-solid"} ${
              pathname === `/my-page/${menu.path}`
                ? "border-[#f8b195]"
                : "border-white"
            }`}
          >
            <Link href={`/my-page/${menu.path}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
