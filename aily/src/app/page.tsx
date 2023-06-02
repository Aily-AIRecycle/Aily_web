'use client';
import BoardContent from "@/components/Board/BoardContent";
import BoardHeader from "@/components/Board/BoardHeader";
import Board from "@/pages/Board";
import HeaderAndFooter from "@/pages/HeaderAndFooter";
import HomePage from "@/pages/HomePage";
import IsRecycle from "@/pages/IsRecycle";
import Join from "@/pages/Join";
import Login from "@/pages/Login";
import NotFound from "@/pages/NotFound";
import { RouterProvider, createBrowserRouter, redirect } from "react-router-dom";

export default function Home()
{
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderAndFooter />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/board",
        element: <BoardHeader />,
        children: [
          { path: "/board", element: <Board /> },
          { path: "/board/:boardName", element: <Board /> },
          {
            path: "/board/entire",
            element: <Board />,
            loader: () =>
            {
              return redirect("/board");
            },
          },
          { path: "/board/:boardName/:articleId", element: <BoardContent /> },
        ],
      },
      // { path: "/location", element: <Location /> },
      { path: "/isRecycle", element: <IsRecycle /> },
    ],
  },
  // { path: "/login", element: <Login /> },
  // { path: "/join", element: <Join /> },
  { path: "/*", element: <NotFound /> },
]);