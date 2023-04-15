import classes from "./BoardTitle.module.css";
import { Link } from "react-router-dom";

function BoardTitle(props) {
  const id = props.id;
  const title = props.title;
  const category = props.category;
  const writer = props.writer;
  const date = props.date;
  const content = props.content;

  return (
    <li className={classes.boardTitle}>
      <div className={classes.id}>{id}</div>
      <div className={classes.category}>{category}</div>
      <div className={classes.title}>
        <Link
          to={`/board/notice/${id}`}
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
