import { Outlet } from "react-router-dom";
import BoardNavigation from "../BoardNavigation";

function BoardHeader() {
  return (
    <>
      <BoardNavigation />
      <Outlet />
    </>
  );
}

export default BoardHeader;
