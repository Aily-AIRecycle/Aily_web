import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.head_wrap}>
      <div className={classes.head}>
        <div className={classes.head_logo}>
          <Link to="/">
            <p>Ai Recycling</p>
            <p>AiLY</p>
          </Link>
        </div>
        <ul className={classes.head_menu}>
          <li className={classes.menu}>
            <NavLink
              to="/board/notice"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              게시판
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/location"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              위치
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/isRecycle"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              재활용 여부 검색
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              로그인
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MainNavigation;
