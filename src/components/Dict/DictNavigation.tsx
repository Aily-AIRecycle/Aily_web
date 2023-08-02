"use client";
import useWindowWidth from "@/hooks/use-windowWidth";
import classes from "@/components/Dict/styles/DictNavigation.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuData = [
  { name: "전체", path: "all" },
  { name: "일반쓰레기", path: "gen" },
  { name: "캔류 · 고철", path: "can" },
  { name: "페트", path: "pet" },
  { name: "종이 · 종이팩", path: "paper" },
  { name: "유리", path: "glass" },
  { name: "비닐", path: "vinyl" },
  { name: "플라스틱", path: "plastic" },
  { name: "음식물", path: "food" },
  { name: "의류 · 원단", path: "cloth" },
  { name: "ETC", path: "etc" },
];

function DictNavigation() {
  const windowWidth = useWindowWidth();

  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  const optionChangeHandler = (event: any) => {
    setSelectedOption(event.target.value);
    router.push(event.target.value);
  };

  let header;
  if (windowWidth === null) {
  } else if (windowWidth > 1000) {
    header = (
      <div className={classes.board_wrap}>
        <ul className={classes.board}>
          {menuData.map((menu, index) => (
            <li
              key={index}
              className={`${classes.menu} ${
                pathname === `/dictionary/${menu.path}` ? classes.active : ""
              }`}
            >
              <Link href={`/dictionary/${menu.path}`}>{menu.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    header = (
      <select
        value={selectedOption}
        onChange={optionChangeHandler}
        className={classes.select}
      >
        {menuData.map((menu, index) => (
          <option key={index} value={`/dictionary/${menu.path}`}>
            {menu.name}
          </option>
        ))}
      </select>
    );
  }
  return (
    <>
      <div className={classes.board_title}>
        <ul>
          <li>재활용 사전</li>
          <li>헷갈리는 분리수거 다 알려드릴게요!</li>
        </ul>
      </div>
      <>{header}</>
    </>
  );
}

export default DictNavigation;
