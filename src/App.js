import * as React from "react";
import { Reset } from "styled-reset";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./pages/Header.js";
import IntroduceCompany from "./pages/IntroduceCompany.js";
import BoardHeader from "./pages/Board/BoardHeader.js";
import Notice from "./pages/Notice.js";
import HomePage from "./pages/Home.js";
import Login from "./pages/Login.js";
import BoardContent from "./pages/Board/BoardContent.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/board",
        element: <BoardHeader />,
        children: [{ path: "/board/notice", element: <Notice /> }, {path: "/board/notice:articleId", element: <BoardContent/>}],
      },
      { path: "/company", element: <IntroduceCompany /> },
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
