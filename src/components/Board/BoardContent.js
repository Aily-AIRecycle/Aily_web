import { Link, useLocation } from "react-router-dom";
import classes from "./BoardContent.module.css";

function BoardContent() {
  const a = useLocation();
  const article = a.state;

  return (
    <>
      <div className={classes.board}>
        <div className={classes.title}>
          {article.title}
          <ul className={classes.info}>
            <li>{article.writer}</li>
            <li>{article.date}</li>
          </ul>
        </div>
        <pre className={classes.content}>{article.content}</pre>
        <div className={classes.list_wrap}>
          <Link className={classes.list} to=".." relative="path">
            목록보기
          </Link>
        </div>
      </div>
    </>
  );
}

export default BoardContent;
