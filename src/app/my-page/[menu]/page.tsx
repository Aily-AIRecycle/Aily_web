"use client";
import { usePathname } from "next/navigation";
import Dashboard from "@/components/MyPage/Dashboard";
import Leave from "@/components/MyPage/Leave";
import Edit from "@/components/MyPage/Edit";
import ChangePassword from "@/components/MyPage/ChangePassword";
import { Provider } from "react-redux";
import store from "@/store";
import Header from "@/components/UI/Header";
import MyPageNavigation from "@/components/MyPage/MyPageNavigation";
import Footer from "@/components/UI/Footer";

const MyPage = () => {
  const pathname = usePathname();

  return (
    <>
      <Provider store={store}>
        <Header />
        <div className="flex justify-center items-center">
          <div className="web:flex justify-center web:bg-[#fafbfb] w-[90%] sm:w-full">
            <MyPageNavigation />
            {pathname === "/my-page/dashboard" && <Dashboard />}
            {pathname === "/my-page/edit" && <Edit />}
            {pathname === "/my-page/password" && <ChangePassword />}
            {pathname === "/my-page/leave" && <Leave />}
          </div>
        </div>
        <Footer />
      </Provider>
    </>
  );
};

export default MyPage;
