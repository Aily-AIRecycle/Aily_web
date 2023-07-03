"use client";
import useWindowWidth from "@/hooks/use-windowWidth";
import classes from "@/components/Board/styles/BoardNavigation.module.scss";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

function BoardNavigation() {
  const windowWidth = useWindowWidth();

  const [selectedOption, setSelectedOption] = useState("");
  const router = useRouter();

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
          <li className={classes.menu}>
            <Link href="/board/all">전체</Link>
          </li>
          <li className={classes.menu}>
            <Link href="/board/notice">공지</Link>
          </li>
          <li className={classes.menu}>
            <Link href="/board/q&a">Q&A</Link>
          </li>
          <li className={classes.menu}>
            <Link href="/board/faq">FAQ</Link>
          </li>
          <li className={classes.menu}>
            <Link href="/board/suggestion">건의사항</Link>
          </li>
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
        <option value="/board/all">전체</option>
        <option value="/board/notice">공지 </option>
        <option value="/board/q&a">Q&A</option>
        <option value="/board/faq">FAQ</option>
        <option value="/board/suggestion">건의사항</option>
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
