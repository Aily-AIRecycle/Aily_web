import useWindowWidth from "../hooks/use-windowWidth";
import classes from "./BoardNavigation.module.css";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function BoardNavigation() {
  const windowWidth = useWindowWidth();

  const [selectedOption, setSelectedOption] = useState("");
  const navigate = useNavigate();

  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value);
    navigate(event.target.value);
  };

  let header;
  if (windowWidth > 1000) {
    header = (
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
                  to="/board/faq"
                  className={({ isActive }) =>
                      isActive ? classes.active : undefined
                  }
              >
                FAQ
              </NavLink>
            </li>
            <li className={classes.menu}>
              <NavLink
                  to="/board/suggestion"
                  className={({ isActive }) =>
                      isActive ? classes.active : undefined
                  }
              >
                건의사항
              </NavLink>
            </li>
          </ul>
        </header>
    );
  } else {
    header = (
        <select
            value={selectedOption}
            onChange={optionChangeHandler}
            className={classes.select}
        >
          <option value="/board">전체</option>
          <option value="/board/notice">공지 </option>
          <option value="/board/q&a">Q&A</option>
          <option value="/board/faq">FAQ</option>
          <option value="/board/suggestion">건의사항</option>
        </select>
    );
  }
  return (
      <>
        {/*<div className={classes.board_title}>게시판</div>*/}
        <>{header}</>
      </>
  );
}

export default BoardNavigation;