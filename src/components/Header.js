import { useState } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import bars from "../../src/img/header/bars-solid.svg";
import x from "../../src/img/header/x-solid.svg";
import HeaderList from "./HeaderList";
import useWindowWidth from "../hooks/use-windowWidth";

function Header() {
  const windowWidth = useWindowWidth();
  const [menuShow, setMenuShow] = useState(false);

  function menuHandler() {
    setMenuShow(!menuShow);
    console.log(menuShow);
  }

  let header;
  if (windowWidth > 1000) {
    header = (
      <header className={classes.head_wrap}>
        <div className={classes.head}>
          <div className={classes.head_logo}>
            <Link to="/">
              <p>Ai Recycling</p>
              <p>AiLY</p>
            </Link>
          </div>
          <HeaderList ul={classes.head_menu} li={classes.menu} />
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
            <HeaderList
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
export default Header;
