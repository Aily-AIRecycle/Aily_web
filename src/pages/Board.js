import { Outlet } from "react-router-dom";
import BoardTitle from "../components/Board/BoardTitle";
import classes from "./Board.module.css";

const DUMMY_DATA = [
  { id: "1", title: "첫 글", content: "aily에 오신 것을 환영합니다." },
  { id: "2", title: "두번째 글", content: "안녕하세요~" },
  { id: "3", title: "세번째 글", content: "안녕하세요~" },
];

function Board() {
  return (
    <>
      <div className={classes.notice}>
        <p className={classes.title}>공지사항</p>
        <hr />
        <ul className={classes.list}>
          {DUMMY_DATA.map((article) => (
            <BoardTitle key={article.id} article={article} />
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Board;
