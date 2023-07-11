"use client";
import { useState } from "react";
import classes from "@/components/MyPage/styles/MyPageNavigation.module.scss";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import aily from "img/aily_logo.svg";

const menuData = [
  { name: "대시보드", path: "dashboard" },
  { name: "내 정보 수정", path: "edit" },
  { name: "비밀번호 변경", path: "password" },
  { name: "회원 탈퇴", path: "leave" },
];

export default function MyPageNavigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div>
        <div className={classes.profile}>
          <div>
            <Image src={aily} width={100} alt="profile_img" />
          </div>
          <p>홍길동 님</p>
        </div>
        <ul className={classes.my_page}>
          {menuData.map((menu) => (
            <li
              className={`${classes.menu} ${
                pathname === `/my-page/${menu.path}` ? classes.menu_active : ""
              }`}
            >
              <Link href={`/my-page/${menu.path}`}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
