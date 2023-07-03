import { Outlet } from "react-router-dom";
import BoardNavigation from "@/components/Board/BoardNavigation";

function BoardHeader() {
  return (
    <>
      <BoardNavigation />
      <Outlet />
    </>
  );
}

export default BoardHeader;
