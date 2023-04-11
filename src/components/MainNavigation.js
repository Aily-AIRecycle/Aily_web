import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { Link, NavLink } from "react-router-dom";
import bars from "../../src/img/header/bars-solid.svg";
import x from "../../src/img/header/x-solid.svg";

function MainNavigation() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [menuShow, setMenuShow] = useState(false);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });
  console.log("innerWidth", innerWidth);

  function menuHandler() {
    setMenuShow(!menuShow);
    console.log(menuShow);
  }

  let header;
  if (innerWidth > 1000) {
    header = (
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
  } else {
    header = (
      <div className={classes.head_wrap_mobile}>
        <header className={classes.head_mobile}>
          <div className={classes.head_logo_s}>
            <Link to="/">
              <p>Ai Recycling</p>
              <p>AiLY</p>
            </Link>
          </div>
          <img src={bars} alt="bars" onClick={menuHandler}></img>
        </header>
        {menuShow && (
          <div className={classes.mobile_box}>
            <img
              src={x}
              alt="x"
              onClick={menuHandler}
              className={classes.close}
            />
            <ul className={classes.head_menu_mobile}>
              <li className={classes.menu_mobile}>
                <Link to="/board/notice" onClick={menuHandler}>
                  게시판
                </Link>
              </li>
              <li className={classes.menu_mobile}>
                <Link to="/location" onClick={menuHandler}>
                  위치
                </Link>
              </li>
              <li className={classes.menu_mobile}>
                <Link to="/isRecycle" onClick={menuHandler}>
                  재활용 여부 검색
                </Link>
              </li>
              <li className={classes.menu_mobile}>
                <Link to="/login" onClick={menuHandler}>
                  로그인
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
  return header;
}
export default MainNavigation;
