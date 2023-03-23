import classes from "./Header.module.css";
import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <ul className={classes.header}>
        <li className={classes.menu}>
          <NavLink to="/notice">공지사항</NavLink>
        </li>
        <li className={classes.menu}>기업 소개</li>
        <li className={classes.menu}>메뉴 뭐 있겠지</li>
        <li className={classes.menu}>로그인</li>
      </ul>
    </header>
  );
};

export default Header;
