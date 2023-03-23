import { Fragment } from "react";
import classes from "./Notice.module.css";

const Notice = () => {
  return (
    <Fragment className={classes.notice}>
      <h1>공지사항이에용</h1>
      <ul>
        <li>글제목</li>
        <li>글제목</li>
        <li>글제목</li>
        <li>글제목</li>
      </ul>
    </Fragment>
  );
};

export default Notice;
