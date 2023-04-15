import { useState, useEffect } from "react";
import classes from "./MainNavigation.module.css";
import { Link } from "react-router-dom";
import bars from "../../src/img/header/bars-solid.svg";
import x from "../../src/img/header/x-solid.svg";
import MainNavigationList from "./MainNavigationList";

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
          <MainNavigationList ul={classes.head_menu} li={classes.menu} />
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
            <MainNavigationList
              ul={classes.head_menu_mobile}
              li={classes.menu_mobile}
              onClick={menuHandler}
            />
          </div>
        )}
      </div>
    );
  }
  return header;
}
export default MainNavigation;
