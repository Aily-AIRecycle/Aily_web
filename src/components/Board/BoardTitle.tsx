import classes from "@/components/Board/styles/BoardTitle.module.css";
import Link from "next/link";

function BoardTitle(props: any) {
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
          href={`/board/${props.boardName}/${id}`}
          // state={{
          //   id: id,
          //   title: title,
          //   content: content,
          //   writer: writer,
          //   date: date,
          // }}
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
