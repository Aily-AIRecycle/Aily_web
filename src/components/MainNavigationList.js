import { Link } from "react-router-dom";

function MainNavigationList(props) {
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
        <Link to="/login">로그인</Link>
      </li>
    </ul>
  );
}

export default MainNavigationList;
