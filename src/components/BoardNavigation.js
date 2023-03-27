import classes from "./BoardNavigation.module.css";
import { NavLink } from "react-router-dom";

function BoardNavigation() {
  return (
    <header>
      <nav>
        <ul className={classes.board}>
          <li className={classes.menu}>
            <NavLink
              to="notice"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              공지사항
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink>F&A</NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink>Q&A</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default BoardNavigation;
