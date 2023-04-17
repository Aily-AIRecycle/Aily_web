import classes from "./BoardNavigation.module.css";
import { NavLink } from "react-router-dom";
import board from "../../src/img/board/board.svg";

function BoardNavigation() {
  return (
    <>
      <img src={board} alt="board" className={classes.board_img} />
      <header>
        <ul className={classes.board}>
          <li className={classes.menu}>
            <NavLink
              to="/board"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              전체
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/board/notice"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              공지
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/board/q&a"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Q&A
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/board/f&a"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              F&A
            </NavLink>
          </li>
          <li className={classes.menu}>
            <NavLink
              to="/board/suggestions"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              건의사항
            </NavLink>
          </li>
        </ul>
      </header>
    </>
  );
}

export default BoardNavigation;
