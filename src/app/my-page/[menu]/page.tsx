"use client";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/MyPage/Dashboard";
const MyPage = () => {
  const pathname = usePathname();
  return <>{pathname === "/my-page/dashboard" && <Dashboard />}</>;
};
export default MyPage;
