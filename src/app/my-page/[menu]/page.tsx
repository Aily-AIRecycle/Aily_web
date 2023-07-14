"use client";
import { useEffect } from "react";
import axios from "axios";
import MyPageNavigation from "@/components/MyPage/MyPageNavigation";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/MyPage/Dashboard";
const MyPage = () => {
  const pathname = usePathname();
  return <>
  {pathname === "/my-page/mypage" && <MyPageNavigation />}
  {pathname === "/my-page/dashboard" && <Dashboard />}
  </>;
};
export default MyPage;
