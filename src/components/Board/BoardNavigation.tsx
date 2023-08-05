"use client";
import useWindowWidth from "@/hooks/use-windowWidth";
import classes from "@/components/Board/styles/BoardNavigation.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const menuData = [
  { name: "전체", path: "all" },
  { name: "공지사항", path: "notice" },
  { name: "Q&A", path: "q&a" },
  { name: "FAQ", path: "faq" },
  { name: "건의사항", path: "suggestion" },
];

function BoardNavigation() {
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
                pathname === `/boards/${menu.path}` ? classes.active : ""
              }`}
            >
              <Link href={`/boards/${menu.path}`}>{menu.name}</Link>
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
          <option key={index} value={`/boards/${menu.path}`}>
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
          <li>AiLY의 모든 것</li>
          <li>무엇이든 물어보세요</li>
        </ul>
      </div>
      <>{header}</>
    </>
  );
}

export default BoardNavigation;
