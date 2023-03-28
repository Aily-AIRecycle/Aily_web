import classes from "./BoardTitle.module.css";

function BoardTitle(props) {
  const id = props.id;
  const title = props.title;

  return (
    <div className={classes.boardTitle}>
      <div className={classes.id}>{id}</div>
      <div className={classes.title}>{title}</div>
    </div>
  );
}

export default BoardTitle;
