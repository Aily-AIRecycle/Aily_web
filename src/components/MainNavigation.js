import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <ul className={classes.header}>
        <li className={classes.menu}>
          <NavLink to="/" className={({isActive}) => isActive ? classes.active : undefined}>AILY</NavLink>
        </li>
        <li className={classes.menu}>
          <NavLink to="/board/notice" className={({isActive}) => isActive ? classes.active : undefined}>게시판</NavLink>
        </li>
        <li className={classes.menu}>
          <NavLink to="/company" className={({isActive}) => isActive ? classes.active : undefined}>기업 소개</NavLink>
        </li>
        <li className={classes.menu}>
          <NavLink to="/login" className={({isActive}) => isActive ? classes.active : undefined}>로그인</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default MainNavigation;
