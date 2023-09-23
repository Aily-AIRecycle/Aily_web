"use client";
import { ReactElement, useState } from "react";
import HeaderList from "@/components/UI/HeaderList";
import useWindowWidth from "@/hooks/use-windowWidth";
import Link from "next/link";
import Image from "next/image";
import bars from "img/header/bars-solid.svg";
import x from "img/header/x-solid.svg";
import logo from "img/aily_logo.svg";

const ul = "flex items-center w-[700px] h-full";
const li = "w-[175px] h-full flex justify-center items-center";
const link =
  "w-full h-full flex items-center justify-center text-[16px] decoration-0 text-[#3e3e3e] relative top-0 transition-header  ease-out duration-300 visited:decoration-0 visited:text-[#3e3e3e] hover:text-[#f8b195] hover:top-[5px] active:text-[#f8b195] active:top-[5px] after:content-[''] after:absolute after:bottom-[15%] after:left-[50%] after:w-[20%] after:h-[2px] after:bg-[#f8b195] after:translate-x-[-50%] after:origin-center after:transition-headerAfter after:ease-out after:opacity-0 hover:after:translate-x-[-50%] after:duration-300 hover:after:opacity-100";
const Header = (): ReactElement => {
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
  if (windowWidth! > 1000) {
    header = (
      <header className="z-30 bg-white w-full h-[70px] flex justify-center border-b border-solid border-neutral-200">
        <div className="h-[70px] w-[1000px] flex items-center justify-around font-medium">
          <Link
            href="/"
            className="decoration-0 flex justify-center items-center"
          >
            <Image src={logo} width={48} alt="logo" />
          </Link>
          <HeaderList ul={ul} li={li} link={link} />
        </div>
      </header>
    );
  } else {
    header = (
      <div className="flex overflow-x-hidden bg-white border-b border-solid border-neutral-200">
        <header className="flex justify-between items-center w-screen h-[60px]">
          <Link href="/">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="h-10"
            />
          </Link>
          <Image
            src={bars}
            width={30}
            alt="bars"
            onClick={menuHandler}
            className="mr-4"
          />
        </header>
        <div
          className={`fixed w-[250px] flex flex-col h-full bg-[#f8b195] right-0 z-[99] duration-300`}
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
            className="w-[25px] absolute right-[15px] top-4"
          />
          <HeaderList
            ul="flex flex-col"
            li="flex items-center h-[50px] mx-5 my-[10px]"
            link="decoration-none text-white text-2xl"
          />
        </div>
      </div>
    );
  }
  return header;
};
export default Header;
