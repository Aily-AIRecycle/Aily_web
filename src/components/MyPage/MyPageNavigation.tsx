"use client";
import { useEffect, useState } from "react";
import classes from "@/components/MyPage/styles/MyPageNavigation.module.scss";
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
    <div className={classes.box}>
      <div className={classes.profile}>
        <Profile src={imgUrl} />
        <p>{userName}</p>
      </div>
      <ul className={classes.my_page}>
        {menuData.map((menu, index: number) => (
          <li
            key={index}
            className={`${classes.menu} ${
              pathname === `/my-page/${menu.path}` ? classes.menu_active : ""
            }`}
          >
            <Link href={`/my-page/${menu.path}`}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
