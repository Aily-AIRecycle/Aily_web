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
import NotFound from "./pages/NotFound";
import StatsScreen from "./pages/StatsScreen";

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
      { path: "/stats", element: <StatsScreen/> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/join", element: <Join /> },
  { path: "/*", element: <NotFound /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
