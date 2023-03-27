import classes from "./Notice.module.css";

const Notice = () => {
  return (
    <div className={classes.notice}>
      <p className={classes.title}>공지사항</p>
      <hr />
      <ul>
        <li>글제목</li>
        <li>글제목</li>
        <li>안녕하세용 aily 서비스에 오신 것을 환영합니당</li>
      </ul>
    </div>
  );
};

export default Notice;
