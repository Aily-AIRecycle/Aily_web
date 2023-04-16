import "./App.css";
import * as React from "react";
import { Reset } from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HeaderAndFooter from "./pages/HeaderAndFooter.js";
import BoardHeader from "./pages/Board/BoardHeader.js";
import Board from "./pages/Board.js";
import HomePage from "./pages/Home.js";
import Login from "./pages/Login.js";
import BoardContent from "./pages/Board/BoardContent.js";
import Location from "./pages/Location.js";
import IsRecycle from "./pages/IsRecycle";

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
          { path: "/board/notice", element: <Board /> },
          { path: "/board/notice/:articleId", element: <BoardContent /> },
        ],
      },
      { path: "/location", element: <Location /> },
      { path: "/isRecycle", element: <IsRecycle /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

function App() {
  return (
    <>
      <Reset />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
