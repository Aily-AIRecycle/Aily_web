"use client";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/MyPage/Dashboard";
import Edit from "@/components/MyPage/Edit";
import Leave from "@/components/MyPage/Leave";

const MyPage = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/my-page/dashboard" && <Dashboard />}
      {pathname === "/my-page/edit" && <Edit />}
      {pathname === "/my-page/leave" && <Leave />}
    </>
  );
};

export default MyPage;
