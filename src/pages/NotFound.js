import { Link, useNavigate } from "react-router-dom";
import classes from "./NotFound.module.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className={classes.not_found}>
      <h1 className={classes.h1}>요청하신 페이지를 찾을 수 없습니다.</h1>
      <h2 className={classes.h2}>
        주소가 잘못 입력되었거나, 변경 혹은 삭제되어 요청하신 페이지를 찾을 수
        없습니다.
      </h2>
      <h2 className={classes.h2}>
        입력하신 주소가 정확한지 다시 한번 확인해주세요
      </h2>
      <input
        type="button"
        value="이전 페이지로 이동"
        onClick={() => navigate(-1)}
      />
      <Link to="/">메인 페이지로 이동</Link>
    </div>
  );
};

export default NotFound;
