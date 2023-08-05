"use client";
import Link from "next/link";
import classes from "@/app/boards/[category]/[id]/BoardContent.module.scss";
import ARTICLE_DATA from "@/components/Board/article";
import { Article } from "@/components/Board/article";

function Page({ params }: { params: { id: string } }): JSX.Element {
  const article = ARTICLE_DATA.filter(
    (article: Article) => article.id === params.id
  )[0];
  return (
    <>
      <div className={classes.board}>
        <div className={classes.title}>
          {article.title}
          <ul className={classes.info}>
            <li>{article.writer}</li>
            <li>{article.date}</li>
          </ul>
        </div>
        <div className={classes.content_wrap}>
          <pre className={classes.content}>{article.content}</pre>
        </div>
      </div>
      <div className={classes.list_wrap}>
        <Link className={classes.list} href=".">
          목록보기
        </Link>
      </div>
    </>
  );
}

export default Page;
