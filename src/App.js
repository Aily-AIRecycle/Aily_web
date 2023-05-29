import "./App.css";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import HeaderAndFooter from "./pages/HeaderAndFooter.js";
import BoardHeader from "./components/Board/BoardHeader.js";
import BoardContent from "./components/Board/BoardContent.js";
import Board from "./pages/Board.js";
import HomePage from "./pages/Home.js";
import Login from "./pages/Login.js";
import Join from "./pages/Join.js";
import Location from "./pages/Location.js";
import IsRecycle from "./pages/IsRecycle";
import MyInfo from "./pages/MyPage";

const user_email = sessionStorage.getItem("user_email");
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
            loader: () => {
              return redirect("/board");
            },
          },
          { path: "/board/:boardName/:articleId", element: <BoardContent /> },
        ],
      },
      { path: "/location", element: <Location /> },
      { path: "/isRecycle", element: <IsRecycle /> },
      user_email ? { path: "/myPage", element: <MyInfo /> } : {},
    ],
  },
  !user_email ? { path: "/login", element: <Login /> } : {},
  !user_email ? { path: "/join", element: <Join /> } : {},
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
