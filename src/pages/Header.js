import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Header = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
