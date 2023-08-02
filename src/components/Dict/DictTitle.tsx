import classes from "@/components/Dict/styles/DictTitle.module.scss";
import Link from "next/link";

function DictTitle(props: any) {
  const { article } = props;
  const { id, title, category, writer, date } = article;

  return (
    <li className={classes.boardTitle}>
      <div className={classes.id}>{id}</div>
      <div className={classes.category}>{category}</div>
      <div className={classes.title}>
        <Link href={`/dictionary/${props.boardName}/${id}`}>{title}</Link>
      </div>
      <div className={classes.writer}>{writer}</div>
      <div className={classes.date}>{date}</div>
    </li>
  );
}

export default DictTitle;
