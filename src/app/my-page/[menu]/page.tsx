"use client";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/MyPage/Dashboard";
import Leave from "@/components/MyPage/Leave";
import Edit from "@/components/MyPage/Edit";
import ChangePassword from "@/components/MyPage/ChangePassword";
import { Provider } from "react-redux";
import store from "@/store";

const MyPage = () => {
  const pathname = usePathname();

  return (
    <>
      <Provider store={store}>
        {pathname === "/my-page/dashboard" && <Dashboard />}
        {pathname === "/my-page/edit" && <Edit />}
        {pathname === "/my-page/password" && <ChangePassword />}
        {pathname === "/my-page/leave" && <Leave />}
      </Provider>
    </>
  );
};

export default MyPage;
