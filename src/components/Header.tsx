'use client';
import { useState } from "react";
import classes from "@/components/styles/Header.module.css";
import { Link } from "react-router-dom";
import bars from "img/header/bars-solid.svg";
import x from "img/header/x-solid.svg";
import logo from "img/aily_logo.svg";
import HeaderList from "./HeaderList";
import useWindowWidth from "../hooks/use-windowWidth";

function Header()
{
  const windowWidth = useWindowWidth();
  const [menuShow, setMenuShow] = useState(false);

  function menuHandler()
  {
    setMenuShow(!menuShow);
    console.log(menuShow);
  }

  let header;
  if (windowWidth > 1000)
  {
    header = (
      <header className={classes.head_wrap}>
        <div className={classes.head}>
          <Link to="/">
            <img src="img/aily_logo.svg" alt="logo" className={classes.head_logo} />
          </Link>
          <HeaderList ul={classes.head_menu} li={classes.menu} />
        </div>
      </header>
    );
  } else
  {
    header = (
      <div className={classes.head_wrap_mobile}>
        <header className={classes.head_mobile}>
          <Link to="/">
            <img src="img/aily_logo.svg" alt="logo" className={classes.head_logo_s} />
          </Link>
          <img src="img/header/bars-solid.svg" alt="bars" onClick={menuHandler}></img>
        </header>
        {menuShow && (
          <div className={classes.mobile_box}>
            <img
              src="img/header/x-solid.svg"
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
