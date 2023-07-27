"use client";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/MyPage/Dashboard";
import Leave from "@/components/MyPage/Leave";
import Edit from "@/components/MyPage/Edit";
import ChangePassword from "@/components/MyPage/ChangePassword";

const MyPage = () => {
  const pathname = usePathname();

  return (
    <>
      {pathname === "/my-page/dashboard" && <Dashboard />}
      {pathname === "/my-page/edit" && <Edit />}
      {pathname === "/my-page/password" && <ChangePassword />}
      {pathname === "/my-page/leave" && <Leave />}
    </>
  );
};

export default MyPage;
