import { Outlet } from "react-router-dom";
import BoardTitle from "../components/Board/BoardTitle";
import classes from "./Board.module.css";

const DUMMY_DATA = [
  {
    id: "1",
    category: "공지",
    category_id: 1,
    title: "첫 글",
    writer: "Aily",
    content: "aily에 오신 것을 환영합니다.",
    date: "2023.04.17",
  },
  {
    id: "2",
    category: "FAQ",
    category_id: 3,
    title: "포인트 사용은 어디서 할 수 있나요?",
    writer: "Aily",
    content: "여기저기서 할 수 있습니다.",
    date: "2023.04.17",
  },
  {
    id: "3",
    category: "FAQ",
    category_id: 3,
    title: "Aily 이용은 어떻게 하나요?",
    writer: "Aily",
    content: "잘 합니다.",
    date: "2023.04.17",
  },
];

function Board() {
  return (
    <>
      <div className={classes.board}>
        <hr className={classes.hr} />
        <ul className={classes.list}>
          {DUMMY_DATA.filter(
            (article) => parseInt(params.boardId) === article.category_id
          ).map((article) => (
            <BoardTitle key={article.id} article={article} />
          ))}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Board;
