import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <ul className={classes.header}>
        <li className={classes.menu}>
          <NavLink to="/">AILY</NavLink>
        </li>
        <li className={classes.menu}>
          <NavLink to="/board/notice">게시판</NavLink>
        </li>
        <li className={classes.menu}>
          <NavLink to="/company">기업 소개</NavLink>
        </li>
        <li className={classes.menu}>메뉴 뭐 있겠지</li>
        <li className={classes.menu}>로그인</li>
      </ul>
    </header>
  );
};

export default MainNavigation;
