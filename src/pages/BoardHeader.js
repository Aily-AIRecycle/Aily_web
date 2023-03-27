import { Outlet } from "react-router-dom";
import BoardNavigation from "../components/BoardNavigation";

function BoardHeader() {
  return (
    <>
      <BoardNavigation />
      <Outlet />
    </>
  );
}

export default BoardHeader;
