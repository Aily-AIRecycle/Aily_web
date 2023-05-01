import classes from "./BoardTitle.module.css";
import { Link } from "react-router-dom";

function BoardTitle(props) {
  const article = props.article;
  const id = article.id;
  const title = article.title;
  const category = article.category;
  const writer = article.writer;
  const date = article.date;
  const content = article.content;

  return (
    <li className={classes.boardTitle}>
      <div className={classes.id}>{id}</div>
      <div className={classes.category}>{category}</div>
      <div className={classes.title}>
        <Link
          to={`/board/${props.boardName}/${id}`}
          state={{
            id: id,
            title: title,
            content: content,
          }}
        >
          {title}
        </Link>
      </div>
      <div className={classes.writer}>{writer}</div>
      <div className={classes.date}>{date}</div>
    </li>
  );
}

export default BoardTitle;
