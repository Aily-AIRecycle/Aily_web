import { Link } from "react-router-dom";
import user from "../img/login/user.svg";

function HeaderList(props) {
  const user_email = sessionStorage.getItem("user_email");

  console.log(user_email);
  return (
    <ul className={props.ul}>
      <li className={props.li}>
        <Link to="/board" onClick={props.onClick}>
          게시판
        </Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        <Link to="/location">위치</Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        <Link to="/isRecycle">재활용 여부 검색</Link>
      </li>
      <li className={props.li} onClick={props.onClick}>
        {!user_email ? (
          <Link to="/login">로그인</Link>
        ) : (
          <Link to="/myInfo">
            <div>
              <img src={user} />
            </div>
          </Link>
        )}
      </li>
    </ul>
  );
}

export default HeaderList;
