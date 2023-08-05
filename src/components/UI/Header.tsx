"use client";
import { ReactElement, useState } from "react";
import classes from "@/components/UI/styles/Header.module.scss";
import HeaderList from "@/components/UI/HeaderList";
import useWindowWidth from "@/hooks/use-windowWidth";
import Link from "next/link";
import Image from "next/image";
import bars from "img/header/bars-solid.svg";
import x from "img/header/x-solid.svg";
import logo from "img/aily_logo.svg";

const Header = (): ReactElement | null => {
  const windowWidth = useWindowWidth();
  const width = 250;
  const [xPosition, setX] = useState(-width);

  function menuHandler() {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  }

  let header;
  if (windowWidth === null) {
  } else if (windowWidth > 1000) {
    header = (
      <header className={classes.head_wrap}>
        <div className={classes.head}>
          <Link href="/">
            <Image src={logo} width={48} alt="logo" />
          </Link>
          <HeaderList ul={classes.head_menu} li={classes.menu} />
        </div>
      </header>
    );
  } else {
    header = (
      <div className={classes.head_wrap_mobile}>
        <header className={classes.head_mobile}>
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className={classes.head_logo_s}
            />
          </Link>
          <Image src={bars} width={30} alt="bars" onClick={menuHandler} />
        </header>
        <div
          className={classes.mobile_box}
          style={{
            transform: `translatex(${-xPosition}px)`,
          }}
        >
          <Image
            src={x}
            alt="x"
            width={100}
            height={100}
            onClick={menuHandler}
            className={classes.close}
          />
          <HeaderList
            ul={classes.head_menu_mobile}
            li={classes.menu_mobile}
            onClick={menuHandler}
          />
        </div>
      </div>
    );
  }
  return header || null;
};
export default Header;
