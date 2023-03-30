import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.nav}>
      <Link to="/">
        <div className={classes.logo}>
          <p>Ai Recycling</p>
          <p>AiLY</p>
        </div>
      </Link>
      <ul className={classes.header}>
        <li className={classes.menu}></li>
        <li className={classes.menu}></li>
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
            {/* 재활용 가능 여부 검색 vs 재활용 여부 검색 */}
            재활용 가능 여부 검색
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
    </header>
  );
};

export default MainNavigation;
